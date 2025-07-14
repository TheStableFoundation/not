import * as React from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { selectionFeedback } from "@tauri-apps/plugin-haptics";

interface WalletSettingsSeedPhraseModalProps {
  open: boolean;
  onClose: () => void;
}

export default function WalletSettingsSeedPhraseModal({
  open,
  onClose,
}: WalletSettingsSeedPhraseModalProps) {
  const [showSeedPhrase, setShowSeedPhrase] = React.useState(false);
  const [seedPhrase, setSeedPhrase] = React.useState("");
  const [seconds, setSeconds] = React.useState(5);

  const onSetShowSeedPhrase = async () => {
    // Get the current seed phrase from the wallet
    // const seedPhrase = await getSeedPhrase();
    // Show the seed phrase in a modal
    setSeedPhrase("this is your seed phrase");
  };

  const onShowSeedPhrase = async () => {
    await selectionFeedback();
    await onSetShowSeedPhrase();
    setShowSeedPhrase(true);
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
      setShowSeedPhrase(false);
      onClose();
    }, 5000);
  };

  return (
    <Modal
      open={open}
      onClose={async () => {
        await selectionFeedback();
        onClose();
      }}
      aria-labelledby="wallet-settings-seed-phrase-modal"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        m: 0,
        p: 0,
      }}
    >
      <Box
        sx={{
          bgcolor: "background.paper",
          borderRadius: 3,
          boxShadow: 24,
          p: { xs: 2, sm: 3 },
          minWidth: 300,
          maxWidth: 380,
          width: "90vw",
          outline: "none",
          mx: 1,
        }}
      >
        <Typography
          id="switch-keypair-modal"
          variant="h6"
          sx={{
            mb: 2,
            textAlign: "center",
            fontWeight: "bold",
            color: "#1e88e5",
            letterSpacing: 1,
          }}
        >
          Show Seed Phrase
        </Typography>
        <Box
          sx={{
            maxHeight: 320,
            overflowY: "auto",
            overflowX: "hidden",
            pr: 1,
            mb: 2,
          }}
        >
          {showSeedPhrase && (
            <Box>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  mb: 2,
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#1e88e5",
                  letterSpacing: 1,
                }}
              >
                {seedPhrase}
              </Typography>
              <Typography variant="body2" color="warning">
                Will close in {seconds} seconds.
              </Typography>
            </Box>
          )}
          {!showSeedPhrase && (
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 2,
                textAlign: "center",
                fontWeight: "bold",
                color: "#1e88e5",
                letterSpacing: 1,
              }}
            >
              Please note that your seed phrase is the only way to recover your
              wallet. If you lose it, you will lose access to your funds.
            </Typography>
          )}
        </Box>
        {!showSeedPhrase && (
          <Button
            variant="outlined"
            color="warning"
            fullWidth
            sx={{
              mt: 1,
              borderRadius: 2,
              fontWeight: "bold",
              letterSpacing: 1,
            }}
            onClick={onShowSeedPhrase}
          >
            I understand
          </Button>
        )}
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          sx={{
            mt: 1,
            borderRadius: 2,
            fontWeight: "bold",
            letterSpacing: 1,
          }}
          onClick={async () => {
            await selectionFeedback();
            onClose();
          }}
        >
          {showSeedPhrase ? "Close" : "Cancel"}
        </Button>
      </Box>
    </Modal>
  );
}
