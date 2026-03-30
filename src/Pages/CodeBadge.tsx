import { Box } from "@mui/material";

export function Code({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="code"
      sx={{
        bgcolor: "#f0f1f5",
        px: 0.5,
        borderRadius: 0.5,
        fontSize: "10.5px",
        color: "#5c35d4",
        fontFamily: "monospace",
      }}
    >
      {children}
    </Box>
  );
}