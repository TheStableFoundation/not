"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import LockIcon from "@mui/icons-material/Lock";
import BottomTabBar from "../../lib/components/bottom-tab-bar";
import { useAppLock } from "../../lib/context/app-lock-context";
import CircularProgress from "@mui/material/CircularProgress";
import { storeWallet } from "../../lib/store/store";
import { SolanaWallet, WALET_0 } from "../../lib/crate/generated";
import { debug } from "@tauri-apps/plugin-log";
import { redirect, useRouter } from "next/navigation";
import Tooltip from "@mui/material/Tooltip";

enum State {
  Loading,
  Loaded,
  Error,
}

export default function WalletHome() {
  // Placeholder data
  const balance = "$2,500.00";
  const userName = "Alex Morgan";
  const { lock } = useAppLock();
  const router = useRouter();
  const [wallet, setWallet] = React.useState<SolanaWallet | undefined>(
    undefined
  );
  const [state, setState] = React.useState(State.Loading);
  // Simulate wallet loading, replace with real loading logic
  const loadWallet = async () => {
    try {
      const wallet = await storeWallet().get<SolanaWallet>(WALET_0);
      debug(`wallet: ${wallet?.pubkey}`);
      setWallet(wallet);
      setState(State.Loaded);
    } catch {
      setState(State.Error);
    }
  };
  React.useEffect(() => {
    loadWallet();
  }, []);

  const handleLock = () => {
    lock();
    router.replace("/");
  };

  if (state === State.Loading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#f5f6fa",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (state === State.Error) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#f5f6fa",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography color="error" variant="h6">
          Failed to load wallet.
        </Typography>
      </Box>
    );
  }

  if (!wallet) {
    lock();
    return redirect("/");
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f6fa",
        pb: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 480 }}>
        <Card
          sx={{
            mb: 3,
            borderRadius: 3,
            boxShadow: 2,
            background: "#fff",
            overflow: "hidden",
          }}
        >
          {/* Lock button in top right */}
          <Button
            size="small"
            variant="outlined"
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              minWidth: 0,
              px: 1,
              borderColor: "#1e88e5",
              color: "#1e88e5",
              zIndex: 1,
            }}
            onClick={handleLock}
            startIcon={<LockIcon />}
          >
            Lock
          </Button>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
            <Avatar sx={{ width: 56, height: 56, bgcolor: "#fff" }}>
              <Typography variant="h5" color="#212529">
                {userName[0]}
              </Typography>
            </Avatar>
            <Box>
              <Typography variant="h6" fontWeight="bold" color="#fff">
                {userName}
              </Typography>
              <Box
                sx={{
                  mt: 1,
                  mb: 1,
                  bgcolor: "#fff",
                  borderRadius: 1,
                  px: 1.5,
                  py: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  maxWidth: 260,
                  boxShadow: 1,
                }}
              >
                <Tooltip title="Copy pubkey" arrow>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#1e88e5",
                      fontFamily: "monospace",
                      fontWeight: "bold",
                      fontSize: "1.05rem",
                      wordBreak: "break-all",
                      whiteSpace: "pre-wrap",
                      flex: 1,
                      userSelect: "all",
                      m: 0,
                      p: 0,
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      wallet?.pubkey &&
                      navigator.clipboard.writeText(wallet.pubkey)
                    }
                  >
                    {wallet?.pubkey
                      ? `${wallet.pubkey.slice(0, 3)}...${wallet.pubkey.slice(
                          -3
                        )}`
                      : ""}
                  </Typography>
                </Tooltip>
                {/* Lock button removed from here */}
              </Box>
            </Box>
          </Stack>
          <Typography
            variant="subtitle2"
            sx={{ color: "#b0bec5", mb: 1, letterSpacing: 1 }}
          >
            Total Balance
          </Typography>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              color: "#fff",
              mb: 2,
              textShadow: "0 2px 12px #1e88e5cc",
              fontFamily: "Inter, Roboto, Arial, sans-serif",
            }}
          >
            {balance}
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              sx={{
                bgcolor: "#fff",
                color: "#1e88e5",
                fontWeight: "bold",
                borderRadius: 2,
                boxShadow: 2,
                "&:hover": { bgcolor: "#e3f2fd" },
              }}
              fullWidth
            >
              Deposit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<SendIcon />}
              sx={{
                bgcolor: "#1e88e5",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: 2,
                boxShadow: 2,
                "&:hover": { bgcolor: "#1565c0" },
              }}
              fullWidth
            >
              Send
            </Button>
          </Stack>
        </Card>
        <Card
          sx={{
            mb: 3,
            borderRadius: 3,
            boxShadow: 2,
            background: "#fff",
            overflow: "hidden",
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ mb: 2, color: "#212529" }}
          >
            Recent Activity
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Stack spacing={2}>
            <Box>
              <Typography variant="body2" color="#212529">
                Received USDC
              </Typography>
              <Typography variant="caption" color="#90a4ae">
                +$1,000.00 &nbsp; • &nbsp; Jun 12, 2024
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="#212529">
                Sent USDC
              </Typography>
              <Typography variant="caption" color="#90a4ae">
                -$250.00 &nbsp; • &nbsp; Jun 10, 2024
              </Typography>
            </Box>
          </Stack>
        </Card>
      </Box>
      <BottomTabBar />
    </Box>
  );
}
