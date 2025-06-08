"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { openUrl } from "@tauri-apps/plugin-opener";
import { invoke } from "@tauri-apps/api/core";
import Confetti from "react-confetti";
import TextField from "@mui/material/TextField";

type OnboardingCardProps = {
  open: boolean;
  onClose: () => void;
};

export default function OnboardingCard({ open, onClose }: OnboardingCardProps) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [signing, setSigning] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [showConfetti, setShowConfetti] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [showUsername, setShowUsername] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [usernameSaved, setUsernameSaved] = React.useState(false);

  const handleSign = async () => {
    setSigning(true);
    setError(null);
    try {
      const now = Date.now();
      const message = `I want my €BACH ${now}`;
      await invoke<string>("sign_message", { message });
      setModalOpen(false);
      setShowConfetti(true);
      setSuccess(true);
      setTimeout(() => {
        setShowConfetti(false);
        setShowUsername(true);
      }, 1800);
    } catch (e: any) {
      setError(e?.toString() || "Failed to sign and claim airdrop.");
    }
    setSigning(false);
  };

  const handleSaveUsername = () => {
    // You can add logic to persist username here
    setUsernameSaved(true);
    setTimeout(() => {
      setShowUsername(false);
      onClose();
    }, 1200);
  };

  if (!open) return null;

  return (
    <>
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      {!showUsername ? (
        <Card
          sx={{
            width: "100%",
            maxWidth: 480,
            mb: 3,
            borderRadius: 4,
            boxShadow: 6,
            background: "linear-gradient(135deg, #212529 60%, #1e88e5 100%)",
            color: "#fff",
            position: "relative",
            overflow: "visible",
            border: "2px solid #1e88e5",
          }}
        >
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "#1e88e5",
              bgcolor: "#fff",
              "&:hover": { bgcolor: "#e3f2fd" },
              zIndex: 2,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box sx={{ p: 3, textAlign: "center" }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                mb: 1,
                color: "#fff",
                textShadow: "0 2px 8px #1e88e599",
                letterSpacing: 1,
              }}
            >
              🎉 Claim Your €BACH Airdrop!
            </Typography>
            {error ? (
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="body1"
                  color="error"
                  sx={{
                    mb: 2,
                    fontWeight: "bold",
                    background: "#fff2f2",
                    color: "#e53935",
                    borderRadius: 2,
                    p: 2,
                    fontSize: "1.05rem",
                    boxShadow: 1,
                  }}
                >
                  {error}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setError(null);
                    setModalOpen(true);
                  }}
                  sx={{
                    mt: 1,
                    px: 4,
                    borderRadius: 2,
                    bgcolor: "#fff",
                    color: "#1e88e5",
                    fontWeight: "bold",
                    "&:hover": { bgcolor: "#e3f2fd", color: "#1565c0" },
                  }}
                >
                  Try Again
                </Button>
              </Box>
            ) : !success ? (
              <>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "#fff",
                    color: "#1e88e5",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    borderRadius: 3,
                    boxShadow: 2,
                    px: 4,
                    py: 1.5,
                    "&:hover": { bgcolor: "#e3f2fd", color: "#1565c0" },
                    transition: "all 0.2s",
                  }}
                  onClick={() => setModalOpen(true)}
                >
                  Sign Up &amp; Claim
                </Button>
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    mt: 2,
                    color: "#b0bec5",
                    cursor: "pointer",
                  }}
                  onClick={() => openUrl("https://bachmoney.5mb.app/")}
                >
                  Your wallet address will be used for the airdrop.
                  <br />
                  <span style={{ color: "#1e88e5", textDecoration: "underline" }}>
                    bachmoney.5mb.app
                  </span>
                </Typography>
              </>
            ) : (
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                  mt: 2,
                  color: "#fff",
                  textShadow: "0 2px 8px #1e88e599",
                  letterSpacing: 1,
                }}
              >
                🎊 Success! You have claimed your airdrop.
              </Typography>
            )}
          </Box>
        </Card>
      ) : (
        <Card
          sx={{
            width: "100%",
            maxWidth: 480,
            mb: 3,
            borderRadius: 4,
            boxShadow: 6,
            background: "linear-gradient(135deg, #212529 60%, #1e88e5 100%)",
            color: "#fff",
            position: "relative",
            overflow: "visible",
            border: "2px solid #1e88e5",
          }}
        >
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "#1e88e5",
              bgcolor: "#fff",
              "&:hover": { bgcolor: "#e3f2fd" },
              zIndex: 2,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box sx={{ p: 3, textAlign: "center" }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                mb: 1,
                color: "#fff",
                textShadow: "0 2px 8px #1e88e599",
                letterSpacing: 1,
              }}
            >
              👤 Set Your Username
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                mb: 2,
                color: "#b0bec5",
                fontWeight: 500,
                fontSize: "1.1rem",
              }}
            >
              Choose a username to personalize your wallet.
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter your username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              sx={{
                mb: 2,
                bgcolor: "#f3f4f6",
                borderRadius: 2,
                input: { color: "#212529" },
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#f3f4f6",
                  borderRadius: 2,
                  "& fieldset": {
                    borderColor: "#b0bec5",
                  },
                  "&:hover fieldset": {
                    borderColor: "#90caf9",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#1e88e5",
                  },
                },
                "& input::placeholder": {
                  color: "#b0bec5",
                  opacity: 1,
                  fontStyle: "italic",
                },
              }}
              inputProps={{
                style: { fontFamily: "monospace", fontSize: "1.1rem", color: "#212529" },
                maxLength: 32,
              }}
              disabled={usernameSaved}
            />
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "#fff",
                color: "#1e88e5",
                fontWeight: "bold",
                fontSize: "1.1rem",
                borderRadius: 3,
                boxShadow: 2,
                px: 4,
                py: 1.5,
                "&:hover": { bgcolor: "#e3f2fd", color: "#1565c0" },
                transition: "all 0.2s",
                opacity: !username || usernameSaved ? 0.5 : 1,
                pointerEvents: !username || usernameSaved ? "none" : "auto",
                mt: 1,
              }}
              onClick={handleSaveUsername}
              disabled={!username || usernameSaved}
            >
              {usernameSaved ? "Saved!" : "Save Username"}
            </Button>
            {usernameSaved && (
              <Typography
                variant="body2"
                sx={{
                  mt: 2,
                  color: "#b0bec5",
                  fontWeight: 500,
                }}
              >
                Username saved successfully!
              </Typography>
            )}
          </Box>
        </Card>
      )}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="sign-modal-title"
        aria-describedby="sign-modal-desc"
      >
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#fff",
            borderRadius: 3,
            boxShadow: 24,
            p: 4,
            minWidth: 320,
            maxWidth: "90vw",
            textAlign: "center",
          }}
        >
          <Typography id="sign-modal-title" variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
            Claim Airdrop
          </Typography>
          <Typography id="sign-modal-desc" variant="body1" sx={{ mb: 2 }}>
            Sign this message by clicking the button below.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSign}
            sx={{ mt: 2, px: 4, borderRadius: 2 }}
            disabled={signing}
          >
            {signing ? "Signing..." : "Sign"}
          </Button>
        </Box>
      </Modal>
    </>
  );
}
