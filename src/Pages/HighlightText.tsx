import { Box } from "@mui/material";

export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="span"
      sx={{
        bgcolor: "#e3f2fd",
        color: "#1565c0",
        px: 0.6,
        py: 0.05,
        borderRadius: 0.5,
        fontSize: "10.5px",
        fontWeight: 700,
      }}
    >
      {children}
    </Box>
  );
}
