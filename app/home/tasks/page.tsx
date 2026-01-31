"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import LinearProgress from "@mui/material/LinearProgress";
import Divider from "@mui/material/Divider";
import PageChildrenTitleBar from "@app/lib/components/page-children-title-bar";
import { useLang } from "@app/lib/context/language-context";

// Demo data: Replace with real task data from your backend
interface Task {
  id: string;
  type: string;
  spotifyId?: string;
  youtubeId?: string;
  googlePlaceId?: string;
  yelpId?: string;
  label: string;
  note: string;
  dataType: string;
  company: string;
}

const demoTasks: Task[] = [
  {
    id: "splitfire1",
    type: "spotify-youtube-match",
    spotifyId: "4qsVPnhbvEooD1bSNqvvh0",
    youtubeId: "HzvDofigTKQ",
    label: "",
    note: "",
    dataType: "Music Data",
    company: "SplitFire AI",
  },
  {
    id: "restaurant1",
    type: "restaurant-match",
    googlePlaceId: "ChIJN1t_tDeuEmsRUsoyG83frY4",
    yelpId: "gary-danko-san-francisco",
    label: "",
    note: "",
    dataType: "Restaurant Data",
    company: "FoodMatch AI",
  },
];

// Simulated metadata for Spotify and YouTube tracks
const spotifyMeta: Record<
  string,
  {
    id: string;
    title: string;
    artist: string;
    albumArt: string;
    duration: string;
    url: string;
  }
> = {
  "4qsVPnhbvEooD1bSNqvvh0": {
    id: "4qsVPnhbvEooD1bSNqvvh0",
    title: "The Less I Know The Better",
    artist: "Tame Impala",
    albumArt: "https://via.placeholder.com/300x300/1DB954/FFFFFF?text=Spotify",
    duration: "3:36",
    url: "https://open.spotify.com/track/4qsVPnhbvEooD1bSNqvvh0",
  },
};

const youtubeMeta: Record<
  string,
  {
    id: string;
    title: string;
    artist: string;
    thumbnail: string;
    duration: string;
    url: string;
  }
> = {
  HzvDofigTKQ: {
    id: "HzvDofigTKQ",
    title: "Tame Impala - The Less I Know The Better (Official Audio)",
    artist: "Tame Impala",
    thumbnail: "https://via.placeholder.com/300x300/FF0000/FFFFFF?text=YouTube",
    duration: "3:36",
    url: "https://www.youtube.com/watch?v=HzvDofigTKQ",
  },
};

// Simulated metadata for restaurant data
const googlePlacesMeta: Record<
  string,
  {
    id: string;
    name: string;
    address: string;
    phone: string;
    rating: string;
    cuisine: string;
    photo: string;
  }
> = {
  ChIJN1t_tDeuEmsRUsoyG83frY4: {
    id: "ChIJN1t_tDeuEmsRUsoyG83frY4",
    name: "Gary Danko",
    address: "800 North Point Street, San Francisco, CA 94109",
    phone: "(415) 749-2060",
    rating: "4.6",
    cuisine: "Fine Dining, American",
    photo: "https://via.placeholder.com/300x300/4285F4/FFFFFF?text=Google",
  },
};

const yelpMeta: Record<
  string,
  {
    id: string;
    name: string;
    address: string;
    phone: string;
    rating: string;
    cuisine: string;
    photo: string;
  }
> = {
  "gary-danko-san-francisco": {
    id: "gary-danko-san-francisco",
    name: "Gary Danko",
    address: "800 N Point St, San Francisco, CA 94109",
    phone: "(415) 749-2060",
    rating: "4.5",
    cuisine: "American (New), French",
    photo: "https://via.placeholder.com/300x300/D32323/FFFFFF?text=Yelp",
  },
};

export default function TasksPage() {
  const { t } = useLang();
  const [tasks, setTasks] = useState(demoTasks);

  const handleNoteChange = (id: string, value: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, note: value } : task)),
    );
  };

  const handleSubmit = (id: string, isMatch: boolean) => {
    // TODO: Send labeled data to backend
    console.log(`Task ${id} submitted with match: ${isMatch}`);
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const completed = demoTasks.length - tasks.length;
  const progress = Math.round((completed / demoTasks.length) * 100);

  // Group tasks by data type
  const tasksByDataType = tasks.reduce((acc: Record<string, Task[]>, task) => {
    const dataType = task.dataType || "Other Data";
    if (!acc[dataType]) acc[dataType] = [];
    acc[dataType].push(task);
    return acc;
  }, {});

  return (
    <Box
      sx={{
        minHeight: "unset",
        height: "auto",
        pb: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <PageChildrenTitleBar title={t.tasksTitle || "Tasks"} />

      <Box sx={{ width: "100%", maxWidth: 480, px: 2 }}>
        {/* Header Card */}
        <Card
          sx={{
            p: 3,
            mb: 3,
            boxShadow: "0 2px 16px rgba(153, 50, 204, 0.08)",
            border: "1px solid rgba(153, 50, 204, 0.05)",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#666",
              mb: 2,
              lineHeight: 1.6,
            }}
          >
            Help label data and earn rewards
          </Typography>

          {/* Progress */}
          <Box sx={{ mb: 1 }}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#9932CC", fontWeight: 600 }}
              >
                Progress
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#666", fontWeight: 600 }}
              >
                {completed} / {demoTasks.length} completed
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: 8,
                borderRadius: 4,
                bgcolor: "#f5f6fa",
                "& .MuiLinearProgress-bar": {
                  bgcolor: "#9932CC",
                  borderRadius: 4,
                },
              }}
            />
          </Box>
        </Card>

        {/* Tasks by Data Type */}
        {Object.entries(tasksByDataType).map(([dataType, dataTypeTasks]) => (
          <Box key={dataType} sx={{ mb: 4 }}>
            <Typography
              variant="overline"
              sx={{
                color: "#9932CC",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                mb: 2,
                display: "block",
              }}
            >
              {dataType}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {dataTypeTasks.map((task) => {
                // Music Matching Task
                if (
                  task.type === "spotify-youtube-match" &&
                  task.spotifyId &&
                  task.youtubeId
                ) {
                  const spotify = spotifyMeta[task.spotifyId];
                  const youtube = youtubeMeta[task.youtubeId];

                  if (!spotify || !youtube) return null;

                  return (
                    <Card
                      key={task.id}
                      sx={{
                        boxShadow: "0 2px 16px rgba(153, 50, 204, 0.08)",
                        border: "1px solid rgba(153, 50, 204, 0.05)",
                      }}
                    >
                      <Box sx={{ p: 3 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: "#333",
                            fontWeight: 600,
                            mb: 3,
                          }}
                        >
                          Are these the same track?
                        </Typography>

                        {/* Comparison */}
                        <Box sx={{ mb: 3 }}>
                          {/* Spotify */}
                          <Box
                            sx={{
                              mb: 2,
                              pb: 2,
                              borderBottom: "1px solid #f5f6fa",
                            }}
                          >
                            <Chip
                              label="Spotify"
                              size="small"
                              sx={{
                                mb: 1.5,
                                bgcolor: "rgba(153, 50, 204, 0.08)",
                                color: "#9932CC",
                                fontSize: "0.7rem",
                                fontWeight: 600,
                                height: 22,
                              }}
                            />
                            <Box
                              sx={{
                                display: "flex",
                                gap: 1.5,
                                alignItems: "flex-start",
                              }}
                            >
                              <img
                                src={spotify.albumArt}
                                alt="Album"
                                style={{
                                  width: 60,
                                  height: 60,
                                  borderRadius: 6,
                                  objectFit: "cover",
                                }}
                              />
                              <Box sx={{ flex: 1, minWidth: 0 }}>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    fontWeight: 600,
                                    color: "#333",
                                    mb: 0.5,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical",
                                    lineHeight: 1.4,
                                  }}
                                >
                                  {spotify.title}
                                </Typography>
                                <Typography
                                  variant="caption"
                                  sx={{
                                    color: "#666",
                                    display: "block",
                                    mb: 0.5,
                                  }}
                                >
                                  {spotify.artist}
                                </Typography>
                                <Typography
                                  variant="caption"
                                  sx={{
                                    color: "#999",
                                    fontSize: "0.7rem",
                                  }}
                                >
                                  Duration: {spotify.duration}
                                </Typography>
                              </Box>
                            </Box>
                            <Button
                              href={spotify.url}
                              target="_blank"
                              size="small"
                              sx={{
                                mt: 1,
                                textTransform: "none",
                                color: "#9932CC",
                                fontSize: "0.75rem",
                                fontWeight: 600,
                                p: 0,
                                minWidth: "auto",
                                "&:hover": {
                                  bgcolor: "transparent",
                                  textDecoration: "underline",
                                },
                              }}
                            >
                              Open in Spotify →
                            </Button>
                          </Box>

                          {/* YouTube */}
                          <Box>
                            <Chip
                              label="YouTube"
                              size="small"
                              sx={{
                                mb: 1.5,
                                bgcolor: "rgba(153, 50, 204, 0.08)",
                                color: "#9932CC",
                                fontSize: "0.7rem",
                                fontWeight: 600,
                                height: 22,
                              }}
                            />
                            <Box
                              sx={{
                                display: "flex",
                                gap: 1.5,
                                alignItems: "flex-start",
                              }}
                            >
                              <img
                                src={youtube.thumbnail}
                                alt="Thumbnail"
                                style={{
                                  width: 60,
                                  height: 60,
                                  borderRadius: 6,
                                  objectFit: "cover",
                                }}
                              />
                              <Box sx={{ flex: 1, minWidth: 0 }}>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    fontWeight: 600,
                                    color: "#333",
                                    mb: 0.5,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical",
                                    lineHeight: 1.4,
                                  }}
                                >
                                  {youtube.title}
                                </Typography>
                                <Typography
                                  variant="caption"
                                  sx={{
                                    color: "#666",
                                    display: "block",
                                    mb: 0.5,
                                  }}
                                >
                                  {youtube.artist}
                                </Typography>
                                <Typography
                                  variant="caption"
                                  sx={{
                                    color: "#999",
                                    fontSize: "0.7rem",
                                  }}
                                >
                                  Duration: {youtube.duration}
                                </Typography>
                              </Box>
                            </Box>
                            <Button
                              href={youtube.url}
                              target="_blank"
                              size="small"
                              sx={{
                                mt: 1,
                                textTransform: "none",
                                color: "#9932CC",
                                fontSize: "0.75rem",
                                fontWeight: 600,
                                p: 0,
                                minWidth: "auto",
                                "&:hover": {
                                  bgcolor: "transparent",
                                  textDecoration: "underline",
                                },
                              }}
                            >
                              Open in YouTube →
                            </Button>
                          </Box>
                        </Box>

                        <Divider sx={{ mb: 3 }} />

                        {/* Actions */}
                        <Box sx={{ display: "flex", gap: 1.5, mb: 2 }}>
                          <Button
                            variant="contained"
                            onClick={() => handleSubmit(task.id, true)}
                            sx={{
                              flex: 1,
                              bgcolor: "#9932CC",
                              color: "#fff",
                              textTransform: "none",
                              fontWeight: 600,
                              py: 1,
                              boxShadow: "0 2px 8px rgba(153, 50, 204, 0.2)",
                              "&:hover": {
                                bgcolor: "#800080",
                                boxShadow: "0 4px 12px rgba(153, 50, 204, 0.3)",
                              },
                            }}
                          >
                            Yes, Match
                          </Button>
                          <Button
                            variant="outlined"
                            onClick={() => handleSubmit(task.id, false)}
                            sx={{
                              flex: 1,
                              borderColor: "rgba(153, 50, 204, 0.3)",
                              color: "#9932CC",
                              textTransform: "none",
                              fontWeight: 600,
                              py: 1,
                              "&:hover": {
                                borderColor: "#9932CC",
                                bgcolor: "rgba(153, 50, 204, 0.04)",
                              },
                            }}
                          >
                            No Match
                          </Button>
                        </Box>

                        <TextField
                          placeholder="Add note (optional)"
                          value={task.note}
                          onChange={(e) =>
                            handleNoteChange(task.id, e.target.value)
                          }
                          fullWidth
                          multiline
                          rows={2}
                          variant="outlined"
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              fontSize: "0.875rem",
                              bgcolor: "#fafbfc",
                              "& fieldset": {
                                borderColor: "rgba(153, 50, 204, 0.2)",
                              },
                              "&:hover fieldset": {
                                borderColor: "rgba(153, 50, 204, 0.4)",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#9932CC",
                              },
                            },
                          }}
                        />
                      </Box>
                    </Card>
                  );
                }

                // Restaurant Matching Task
                if (
                  task.type === "restaurant-match" &&
                  task.googlePlaceId &&
                  task.yelpId
                ) {
                  const google = googlePlacesMeta[task.googlePlaceId];
                  const yelp = yelpMeta[task.yelpId];

                  if (!google || !yelp) return null;

                  return (
                    <Card
                      key={task.id}
                      sx={{
                        boxShadow: "0 2px 16px rgba(153, 50, 204, 0.08)",
                        border: "1px solid rgba(153, 50, 204, 0.05)",
                      }}
                    >
                      <Box sx={{ p: 3 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: "#333",
                            fontWeight: 600,
                            mb: 3,
                          }}
                        >
                          Are these the same restaurant?
                        </Typography>

                        {/* Comparison */}
                        <Box sx={{ mb: 3 }}>
                          {/* Google Places */}
                          <Box
                            sx={{
                              mb: 2,
                              pb: 2,
                              borderBottom: "1px solid #f5f6fa",
                            }}
                          >
                            <Chip
                              label="Google Places"
                              size="small"
                              sx={{
                                mb: 1.5,
                                bgcolor: "rgba(153, 50, 204, 0.08)",
                                color: "#9932CC",
                                fontSize: "0.7rem",
                                fontWeight: 600,
                                height: 22,
                              }}
                            />
                            <Box sx={{ mb: 1 }}>
                              <Typography
                                variant="body2"
                                sx={{
                                  fontWeight: 600,
                                  color: "#333",
                                  mb: 0.5,
                                }}
                              >
                                {google.name}
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{
                                  color: "#666",
                                  display: "block",
                                  mb: 0.5,
                                }}
                              >
                                {google.cuisine}
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{
                                  color: "#999",
                                  fontSize: "0.7rem",
                                  display: "block",
                                  mb: 0.5,
                                }}
                              >
                                ★ {google.rating} • {google.phone}
                              </Typography>
                            </Box>
                          </Box>

                          {/* Yelp */}
                          <Box>
                            <Chip
                              label="Yelp"
                              size="small"
                              sx={{
                                mb: 1.5,
                                bgcolor: "rgba(153, 50, 204, 0.08)",
                                color: "#9932CC",
                                fontSize: "0.7rem",
                                fontWeight: 600,
                                height: 22,
                              }}
                            />
                            <Box sx={{ mb: 1 }}>
                              <Typography
                                variant="body2"
                                sx={{
                                  fontWeight: 600,
                                  color: "#333",
                                  mb: 0.5,
                                }}
                              >
                                {yelp.name}
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{
                                  color: "#666",
                                  display: "block",
                                  mb: 0.5,
                                }}
                              >
                                {yelp.cuisine}
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{
                                  color: "#999",
                                  fontSize: "0.7rem",
                                  display: "block",
                                  mb: 0.5,
                                }}
                              >
                                ★ {yelp.rating} • {yelp.phone}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>

                        <Divider sx={{ mb: 3 }} />

                        {/* Actions */}
                        <Box sx={{ display: "flex", gap: 1.5, mb: 2 }}>
                          <Button
                            variant="contained"
                            onClick={() => handleSubmit(task.id, true)}
                            sx={{
                              flex: 1,
                              bgcolor: "#9932CC",
                              color: "#fff",
                              textTransform: "none",
                              fontWeight: 600,
                              py: 1,
                              boxShadow: "0 2px 8px rgba(153, 50, 204, 0.2)",
                              "&:hover": {
                                bgcolor: "#800080",
                                boxShadow: "0 4px 12px rgba(153, 50, 204, 0.3)",
                              },
                            }}
                          >
                            Yes, Match
                          </Button>
                          <Button
                            variant="outlined"
                            onClick={() => handleSubmit(task.id, false)}
                            sx={{
                              flex: 1,
                              borderColor: "rgba(153, 50, 204, 0.3)",
                              color: "#9932CC",
                              textTransform: "none",
                              fontWeight: 600,
                              py: 1,
                              "&:hover": {
                                borderColor: "#9932CC",
                                bgcolor: "rgba(153, 50, 204, 0.04)",
                              },
                            }}
                          >
                            No Match
                          </Button>
                        </Box>

                        <TextField
                          placeholder="Add note (optional)"
                          value={task.note}
                          onChange={(e) =>
                            handleNoteChange(task.id, e.target.value)
                          }
                          fullWidth
                          multiline
                          rows={2}
                          variant="outlined"
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              fontSize: "0.875rem",
                              bgcolor: "#fafbfc",
                              "& fieldset": {
                                borderColor: "rgba(153, 50, 204, 0.2)",
                              },
                              "&:hover fieldset": {
                                borderColor: "rgba(153, 50, 204, 0.4)",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#9932CC",
                              },
                            },
                          }}
                        />
                      </Box>
                    </Card>
                  );
                }

                return null;
              })}
            </Box>
          </Box>
        ))}

        {/* Empty State */}
        {tasks.length === 0 && (
          <Card
            sx={{
              p: 4,
              textAlign: "center",
              boxShadow: "0 2px 16px rgba(153, 50, 204, 0.08)",
              border: "1px solid rgba(153, 50, 204, 0.05)",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#333",
                fontWeight: 600,
                mb: 1,
              }}
            >
              All tasks completed! 🎉
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#666",
              }}
            >
              Great work! Check back later for new tasks.
            </Typography>
          </Card>
        )}
      </Box>
    </Box>
  );
}
