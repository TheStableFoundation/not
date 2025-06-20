# NotWallet

Solana wallet and more. Do your own research.

**Use at your own risk.**

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)
- [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode)
- [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## Run targets

Build desktop, iOS, and Android targets:

```bash
# Desktop
$ pnpm run tauri dev
# iOS (macOS only)
$ pnpm run tauri ios init
$ pnpm run tauri ios dev
# Android
$ pnpm run tauri android init
$ pnpm run tauri android dev
```

- Follow Tauri guide for more information.
- When updating `tauri.conf.json`, always clean up `src-tauri/gen` folder and init the android and ios project again.

```bash
$ pnpm run tauri android init
$ pnpm run tauri ios init
```

## Release Mobiles

For Android, build for release with the upload keystore ready in the path in `keystore.properties` file

```
$ cargo tauri android build --aab
```

For iOS, modify the api key and api user in the publish-ios.sh script with your own user and key.

```
$ pnpm publish-ios
```

<details>
  <summary>Screenshots</summary>

  <p><img src="screenshots/0.png" alt="locked-wallet-view.png" width="250"/></p>
  <p><img src="screenshots/1.png" alt="wallet-home.png" width="250"/></p>
  <p><img src="screenshots/2.png" alt="wallet-mobile.png" width="250"/></p>

</details>

