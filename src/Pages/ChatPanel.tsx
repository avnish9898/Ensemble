import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  IconButton,
  Avatar,
  Tooltip,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CallSplitIcon from "@mui/icons-material/CallSplit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Code } from "./CodeBadge";
import { Highlight } from "./HighlightText";
export function ChatPanel() {
  const [chatInput, setChatInput] = useState("");
  return (
    <Box
      sx={{
        width: 350,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        bgcolor: "#fff",
        borderRight: "1px solid #e8eaf0",
        height: "100vh",
        overflow: "hidden",
      }}
    >
    <Box sx={{width:"100%", p:3,boxSizing:"border-box"}}>
        <Typography variant="h6">Chat</Typography>
    </Box>
      {/* ── Scrollable messages area ── */}
      <Box sx={{ flex: 1, overflowY: "auto", px: 1.5, pt: 1.5, pb: 1 }}>
        {/* Version card 1 */}
        <Box
          sx={{
            bgcolor: "#f8f9fb",
            border: "1px solid #e8eaf0",
            borderRadius: 2,
            px: 1.5,
            py: 1,
            mb: 1.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              sx={{
                fontSize: 11.5,
                fontWeight: 600,
                color: "#37474f",
                lineHeight: 1.3,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              Refactor ClientListSidebar with Cli…
            </Typography>
            <Typography sx={{ fontSize: 10.5, color: "#90a4ae", mt: 0.3 }}>
              Version 495
            </Typography>
          </Box>
          <IconButton size="small" sx={{ ml: 0.5, flexShrink: 0 }}>
            <MoreHorizIcon sx={{ fontSize: 14, color: "#b0bec5" }} />
          </IconButton>
        </Box>

        {/* Assistant bubble 1 */}
        <Box
          sx={{ display: "flex", gap: 1, mb: 1.5, alignItems: "flex-start" }}
        >
          <Avatar
            sx={{ width: 24, height: 24, bgcolor: "#e8f5e9", flexShrink: 0 }}
          >
            <AutoAwesomeIcon sx={{ fontSize: 13, color: "#43a047" }} />
          </Avatar>
          <Box
            sx={{
              bgcolor: "#f8f9fb",
              border: "1px solid #e8eaf0",
              borderRadius: "4px 12px 12px 12px",
              px: 1.5,
              py: 1,
              flex: 1,
            }}
          >
            <Typography
              sx={{ fontSize: 11.5, color: "#37474f", lineHeight: 1.6 }}
            >
              When a ClientCard is selected, the title typography variant should
              change to <Code>`body2`</Code>.
            </Typography>
          </Box>
        </Box>

        {/* Worked with 2 files */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.8,
            mb: 1.5,
            pl: 0.5,
          }}
        >
          <CallSplitIcon
            sx={{ fontSize: 13, color: "#90a4ae", transform: "rotate(180deg)" }}
          />
          <Typography sx={{ fontSize: 11, color: "#90a4ae" }}>
            Worked with 2 files
          </Typography>
          <ArrowForwardIcon sx={{ fontSize: 11, color: "#90a4ae" }} />
        </Box>

        {/* Info message bubble */}
        <Box
          sx={{
            bgcolor: "#f8f9fb",
            border: "1px solid #e8eaf0",
            borderRadius: 2,
            px: 1.5,
            py: 1,
            mb: 1.5,
          }}
        >
          <Typography
            sx={{ fontSize: 11.5, color: "#37474f", lineHeight: 1.7 }}
          >
            Updated the title <Highlight>Typography</Highlight> variant to
            conditionally use <Code>body2</Code> when the card is selected and{" "}
            <Code>body1</Code> otherwise.
          </Typography>
        </Box>

        {/* Version card 2 */}
        <Box
          sx={{
            bgcolor: "#f8f9fb",
            border: "1px solid #e8eaf0",
            borderRadius: 2,
            px: 1.5,
            py: 1,
            mb: 1.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              sx={{
                fontSize: 11.5,
                fontWeight: 600,
                color: "#37474f",
                lineHeight: 1.3,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              Change typography variant on sel…
            </Typography>
            <Typography sx={{ fontSize: 10.5, color: "#90a4ae", mt: 0.3 }}>
              Version 496
            </Typography>
          </Box>
          <IconButton size="small" sx={{ ml: 0.5, flexShrink: 0 }}>
            <MoreHorizIcon sx={{ fontSize: 14, color: "#b0bec5" }} />
          </IconButton>
        </Box>

        {/* Assistant bubble 2 + warning */}
        <Box sx={{ display: "flex", gap: 1, mb: 1, alignItems: "flex-start" }}>
          <Avatar
            sx={{ width: 24, height: 24, bgcolor: "#e8f5e9", flexShrink: 0 }}
          >
            <AutoAwesomeIcon sx={{ fontSize: 13, color: "#43a047" }} />
          </Avatar>
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                bgcolor: "#f8f9fb",
                border: "1px solid #e8eaf0",
                borderRadius: "4px 12px 12px 12px",
                px: 1.5,
                py: 1,
                mb: 0.8,
              }}
            >
              <Typography
                sx={{ fontSize: 11.5, color: "#37474f", lineHeight: 1.6 }}
              >
                Determine whether <Code>`/src/components/organisms/Cli…`</Code>{" "}
                is used. If not…
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ── Bottom: Ask for changes input ── */}
      <Box sx={{ borderTop: "1px solid #e8eaf0", p: 1.5 }}>
        <Box
          sx={{
            border: "1px solid #e0e3ea",
            borderRadius: 2.5,
            bgcolor: "#f8f9fb",
            overflow: "hidden",
          }}
        >
          <TextField
            multiline
            minRows={2}
            maxRows={4}
            placeholder="Ask for changes"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{
              width: "100%",
              "& textarea": {
                fontSize: "12px",
                color: "#37474f",
                padding: "8px 12px 4px",
                resize: "none",
              },
              "& textarea::placeholder": { color: "#b0bec5" },
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 1,
              pb: 0.8,
            }}
          >
            {/* Left icons */}
            <Box sx={{ display: "flex", gap: 0.3 }}>
              <Tooltip title="Attach">
                <IconButton size="small">
                  <AddIcon sx={{ fontSize: 15, color: "#90a4ae" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy">
                <IconButton size="small">
                  <ContentCopyIcon sx={{ fontSize: 14, color: "#90a4ae" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Open externally">
                <IconButton size="small">
                  <OpenInNewIcon sx={{ fontSize: 14, color: "#90a4ae" }} />
                </IconButton>
              </Tooltip>
            </Box>

            {/* Right: model selector + send */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Select
                size="small"
                value="default"
                variant="standard"
                disableUnderline
                sx={{
                  fontSize: "11px",
                  color: "#78909c",
                  "& .MuiSelect-select": { py: 0, pr: "18px !important" },
                }}
              >
                <MenuItem value="default" sx={{ fontSize: 11 }}>
                  Default
                </MenuItem>
              </Select>
              <IconButton
                size="small"
                disabled={!chatInput.trim()}
                sx={{
                  bgcolor: chatInput.trim() ? "#1a237e" : "#e8eaf0",
                  borderRadius: 1.5,
                  width: 26,
                  height: 26,
                  transition: "background 0.2s",
                  "&:hover": {
                    bgcolor: chatInput.trim() ? "#283593" : "#e8eaf0",
                  },
                }}
              >
                <SendIcon
                  sx={{
                    fontSize: 13,
                    color: chatInput.trim() ? "#fff" : "#b0bec5",
                  }}
                />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
