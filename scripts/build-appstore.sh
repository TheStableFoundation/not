#!/usr/bin/env bash
# build-appstore.sh
#
# Full App Store pipeline for NotWallet macOS:
#   1. Build   — cargo tauri build (universal, App Store config, datetime CFBundleVersion)
#   2. Sign    — xcrun productbuild (installer package signing)
#   3. Upload  — xcrun altool (App Store Connect submission)
#
# NotWallet is an open-source project, so no credential, signing identity, or
# machine-specific path is committed here. Every configurable value reads from
# the environment (see .env.appstore.example) and the script fails with a clear
# message when a required one is missing.
#
# Usage:
#   ./scripts/build-appstore.sh              # full pipeline
#   ./scripts/build-appstore.sh build        # build only
#   ./scripts/build-appstore.sh sign         # sign only  (assumes .app already built)
#   ./scripts/build-appstore.sh upload       # upload only (assumes .pkg already signed)
#
#   make asmacos          # full pipeline via Makefile
#   make asmacos-build
#   make asmacos-sign
#   make asmacos-upload

set -euo pipefail

# ── Paths ─────────────────────────────────────────────────────────────────────

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
APPSTORE_CONFIG="${REPO_ROOT}/src-tauri/tauri.prod-macos-appstore.conf.json"

# Auto-load the untracked .env.appstore (signing identities + ASC creds) so
# `make asmacos` works without the caller exporting them first. See
# .env.appstore.example for the expected keys.
if [[ -f "${REPO_ROOT}/.env.appstore" ]]; then
  set -a
  # shellcheck disable=SC1091
  . "${REPO_ROOT}/.env.appstore"
  set +a
fi

# Xcode toolchain. App Store Connect rejects binaries built with a beta Xcode or
# beta SDK, so pin a release Xcode here regardless of the global `xcode-select`.
# Default: the active xcode-select if it is a release, otherwise the newest
# non-beta Xcode under /Applications.
# Override: DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer ./scripts/build-appstore.sh
pick_release_xcode() {
  local active; active="$(xcode-select -p 2>/dev/null)"
  if [[ -n "$active" && "$active" != *[Bb]eta* ]]; then
    printf '%s\n' "$active"; return
  fi
  local app
  for app in /Applications/Xcode*.app; do
    case "$app" in *[Bb]eta*) continue ;; esac
    [[ -d "$app/Contents/Developer" ]] && { printf '%s\n' "$app/Contents/Developer"; return; }
  done
}
DEVELOPER_DIR="${DEVELOPER_DIR:-$(pick_release_xcode)}"
export DEVELOPER_DIR

# ── Overridable config ─────────────────────────────────────────────────────────
#
# Installer signing identity: the "3rd Party Mac Developer Installer" certificate
# (name or SHA-1 fingerprint) in your keychain. This is NOT the same as the app
# signing identity declared in tauri.prod-macos-appstore.conf.json
# (bundle.macOS.signingIdentity), which Tauri uses to codesign the .app bundle
# itself — productbuild requires a separate Installer cert.
# Find it with: security find-identity -v
SIGNING_IDENTITY="${SIGNING_IDENTITY:-}"

# App Store Connect API credentials.
# ASC_API_KEY   — Key ID shown in App Store Connect → Users & Access → Keys.
# ASC_ISSUER_ID — Issuer UUID on the same page.
# The private key (.p8) must be present at:
#   ~/.appstoreconnect/private_keys/AuthKey_<ASC_API_KEY>.p8
ASC_API_KEY="${ASC_API_KEY:-}"
ASC_ISSUER_ID="${ASC_ISSUER_ID:-}"

# App name — must match the productName in tauri.prod-macos-appstore.conf.json
# and therefore the .app bundle produced by tauri build.
APP_NAME="${APP_NAME:-NotWallet}"

# Derived paths — quoted to handle spaces in the app name.
APP_PATH="${REPO_ROOT}/src-tauri/target/universal-apple-darwin/release/bundle/macos/${APP_NAME}.app"
PKG_PATH="${REPO_ROOT}/${APP_NAME}.pkg"

# ── Helpers ───────────────────────────────────────────────────────────────────

step() { echo ""; echo "── $* ──────────────────────────────────────────────"; }
ok()   { echo "✅  $*"; }
fail() { printf "❌  %b\n" "$*" >&2; exit 1; }

# Refuse to build with a beta toolchain — App Store Connect rejects beta-built
# binaries (the cause of an "Invalid Binary" after upload). DEVELOPER_DIR is
# pinned to a release Xcode above; `cargo tauri build` resolves the macOS
# linker/SDK via xcrun, which honors DEVELOPER_DIR.
require_release_xcode() {
  [[ -n "${DEVELOPER_DIR}" && -d "${DEVELOPER_DIR}" ]] \
    || fail "No release Xcode found.\n       Install a release Xcode, or set DEVELOPER_DIR to its Contents/Developer dir."
  case "${DEVELOPER_DIR}" in
    *[Bb]eta*)
      fail "DEVELOPER_DIR points at a beta Xcode:\n       ${DEVELOPER_DIR}\n       App Store Connect rejects beta-built binaries. Point DEVELOPER_DIR at a release Xcode." ;;
  esac
  echo "🛠   Xcode  → $(xcodebuild -version 2>/dev/null | head -1)  [${DEVELOPER_DIR}]"
}

# ── Steps ─────────────────────────────────────────────────────────────────────

do_build() {
  step "1/3  Build"

  require_release_xcode
  [[ -f "$APPSTORE_CONFIG" ]] || fail "Config not found: $APPSTORE_CONFIG"

  # CFBundleVersion: YYYYMMDD.HHMM (UTC)
  #   Two period-separated integers → valid for Apple
  #   Monotonically increasing      → satisfies App Store requirement
  BUNDLE_VERSION="$(date -u +"%Y%m%d.%H%M")"
  BUNDLE_VERSION_JSON="{\"bundle\":{\"macOS\":{\"bundleVersion\":\"${BUNDLE_VERSION}\"}}}"

  echo "🏷   bundleVersion  → ${BUNDLE_VERSION}"
  echo "📦  app config     → ${APPSTORE_CONFIG}"
  echo ""

  # Tauri merges multiple --config flags in order via json_patch::merge.
  # The inline JSON overrides only bundleVersion; all other keys come from
  # tauri.prod-macos-appstore.conf.json. The config file is never mutated.
  cargo tauri build \
    --bundles app \
    --target universal-apple-darwin \
    --config "${APPSTORE_CONFIG}" \
    --config "${BUNDLE_VERSION_JSON}"

  [[ -d "$APP_PATH" ]] || fail "Build succeeded but .app not found at: $APP_PATH"
  ok "Build complete → ${APP_PATH}"
}

do_sign() {
  step "2/3  Sign"

  [[ -d "$APP_PATH" ]] || fail ".app not found: ${APP_PATH}\n       Run 'build' step first."

  if [[ -z "${SIGNING_IDENTITY}" ]]; then
    fail "SIGNING_IDENTITY is not set.\n       Set the '3rd Party Mac Developer Installer' certificate (name or SHA-1) in .env.appstore:\n       SIGNING_IDENTITY=<identity>\n       List available identities with: security find-identity -v"
  fi

  echo "🔏  identity  → ${SIGNING_IDENTITY}"
  echo "📂  component → ${APP_PATH}"
  echo "📦  output    → ${PKG_PATH}"
  echo ""

  xcrun productbuild \
    --sign "${SIGNING_IDENTITY}" \
    --component "${APP_PATH}" /Applications \
    "${PKG_PATH}"

  [[ -f "$PKG_PATH" ]] || fail "productbuild succeeded but .pkg not found at: $PKG_PATH"
  ok "Signed → ${PKG_PATH}"
}

do_upload() {
  step "3/3  Upload"

  [[ -f "$PKG_PATH" ]] || fail ".pkg not found: ${PKG_PATH}\n       Run 'sign' step first."
  [[ -n "${ASC_API_KEY}" ]]   || fail "ASC_API_KEY is not set.\n       Add it to .env.appstore (App Store Connect → Users & Access → Integrations)."
  [[ -n "${ASC_ISSUER_ID}" ]] || fail "ASC_ISSUER_ID is not set.\n       Add it to .env.appstore (App Store Connect → Users & Access → Integrations)."

  echo "📤  file      → ${PKG_PATH}"
  echo "🔑  apiKey    → ${ASC_API_KEY}"
  echo "🏢  issuer    → ${ASC_ISSUER_ID}"
  echo ""

  xcrun altool \
    --upload-app \
    --type macos \
    --file "${PKG_PATH}" \
    --apiKey "${ASC_API_KEY}" \
    --apiIssuer "${ASC_ISSUER_ID}"

  ok "Uploaded to App Store Connect"
}

# ── Entry point ───────────────────────────────────────────────────────────────

STEP="${1:-all}"

case "$STEP" in
  build)  do_build  ;;
  sign)   do_sign   ;;
  upload) do_upload ;;
  all)
    do_build
    do_sign
    do_upload
    echo ""
    echo "🎉  Pipeline complete: built, signed, and uploaded ${APP_NAME}."
    ;;
  *)
    echo "Usage: $0 [build|sign|upload|all]" >&2
    exit 1
    ;;
esac
