"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { invoke } from "@tauri-apps/api/core";
import { debug } from '@tauri-apps/plugin-log';

export default function ImportWalletPage() {
  const [seed, setSeed] = React.useState("");
  const [error, setError] = React.useState("");
  const [pubkey, setPubkey] = React.useState<string | null>(null);

  const handleImport = async () => {
    if (seed.trim().split(/\s+/).length < 12) {
      setError("Seed phrase must be at least 12 words.");
      setPubkey(null);
      return;
    }
    setError("");
    try {
      debug(`Invoking import_solana_wallet with seed: ${seed}`);
      const result = await invoke<{ mnemonic: string; pubkey: string }>(
        "import_solana_wallet",
        { mnemonicPhrase: seed }
      );
      debug(`import_solana_wallet result: ${JSON.stringify(result)}`);
      setPubkey(result.pubkey);
      // Optionally show a success message or redirect
    } catch (e: any) {
      debug(`import_solana_wallet error: ${e?.toString()}`);
      setError(e?.toString() || "Failed to import wallet.");
      setPubkey(null);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        bgcolor: "#f5f6fa",
        position: "relative",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 480, mb: 2 }}>
        <Link href="/" passHref legacyBehavior>
          <Button
            startIcon={<ArrowBackIcon />}
            variant="text"
            color="primary"
            sx={{ mb: 1 }}
            fullWidth
          >
            Back
          </Button>
        </Link>
      </Box>
      <Card sx={{ maxWidth: 480, width: "100%", boxShadow: 3 }}>
        <CardContent>
          <Typography
            variant="h4"
            component="h1"
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            Import Wallet
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            fontWeight="medium"
            sx={{ mb: 2 }}
          >
            Enter your seed phrase:
          </Typography>
          <TextField
            multiline
            minRows={3}
            maxRows={6}
            fullWidth
            placeholder="Enter your 12 or 24 word seed phrase"
            value={seed}
            onChange={(e) => setSeed(e.target.value)}
            error={!!error}
            helperText={error}
            sx={{ mb: 2, bgcolor: "#f3f4f6", borderRadius: 2 }}
            inputProps={{
              style: { fontFamily: "monospace", fontSize: "1.1rem" },
            }}
          />
          {pubkey && (
            <Typography
              variant="body2"
              color="text.secondary"
              align="center"
              sx={{ mb: 1 }}
            >
              Public Key:{" "}
              <span style={{ fontFamily: "monospace" }}>{pubkey}</span>
            </Typography>
          )}
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ mb: 1 }}
          >
            Make sure no one is watching your screen. Never share your seed
            phrase with anyone.
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center", pb: 2 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleImport}
            disabled={seed.trim().length === 0}
          >
            Import Wallet
          </Button>
        </CardActions>
      </Card>
      {/* <BottomTabBar /> */}
    </Box>
  );
}
