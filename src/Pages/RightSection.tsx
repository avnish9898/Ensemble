import { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  Button,
  Chip,
  Select,
  MenuItem,
  FormControl,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Avatar,
  Tooltip,
  AppBar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import type { Client } from "./ClientListSection";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const routes = [
  {
    name: "HB Compliance Route",
    type: "Hospital-Based Charges",
    status: "Deactivated",
    hb: 3,
    pb: 0,
    effectiveStart: "01/25/2026",
    effectiveEnd: "01/25/2026",
  },
  {
    name: "Pharmacy Expedited",
    type: "Pharmacy Charges",
    status: "Active",
    hb: 3,
    pb: 2,
    effectiveStart: "01/05/2026",
    effectiveEnd: "01/05/2026",
  },
  {
    name: "Pharmacy Standard",
    type: "Pharmacy Charges",
    status: "Active",
    hb: 4,
    pb: 7,
    effectiveStart: "12/10/2025",
    effectiveEnd: "01/18/2026",
  },
];

const fileCards = [
  {
    label: "HB Requests",
    icon: <CheckCircleOutlineIcon sx={{ fontSize: 15 }} />,
    // color: "#e57373",
    file: "HB_Hospital-Based_Charges_2026.xlsx",
  },
  {
    label: "PB Requests",
    icon: <CheckCircleOutlineIcon sx={{ fontSize: 15 }} />,
    // color: "#f06292",
    file: "--",
  },
  {
    label: "Supply Requests",
    icon: <CheckCircleOutlineIcon sx={{ fontSize: 15 }} />,
    // color: "#ba68c8",
    file: "SUPPLY_Supply_Charges_2026.xlsx",
  },
  {
    label: "Pharmacy Requests",
    icon: <CheckCircleOutlineIcon sx={{ fontSize: 15 }} />,
    // color: "#9575cd",
    file: "PHARMACY_Pharmacy_Charges_2026.xlsx",
  },
];
const RightSection = ({ client }: { client: Client }) => {
  const [page, setPage] = useState(0);

  return (
    <Box sx={{ flex: 1, overflow: "auto", p: 3 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Typography sx={{ fontSize: 22, fontWeight: 700, color: "black" }}>
          {client.name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <TextField
            size="small"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ fontSize: 16, color: "#90a4ae" }} />
                </InputAdornment>
              ),
              sx: {
                fontSize: 13,
                height: 36,
                width: 200,
                bgcolor: "#fff",
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#1a237e",
              textTransform: "none",
              fontWeight: 600,
              fontSize: 13,
              borderRadius: 2,
              height: 36,
              "&:hover": { bgcolor: "#283593" },
            }}
          >
            Edit Profile
          </Button>
        </Box>
      </Box>

      {/* File cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 2,
          mb: 3,
        }}
      >
        {fileCards.map((f) => (
          <Box
            key={f.label}
            sx={{
              // bgcolor: "#fff",
              // border: "1px solid #e8eaf0",
              borderRadius: 2.5,
              p: 2,
              // borderTop: `3px solid ${f.color}`,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.8,
                mb: 1,
              }}
            >
              <Box>{f.icon}</Box>
              <Typography
                sx={{
                  fontSize: 10.5,
                  fontWeight: 700,
                  color: "#78909c",
                  textTransform: "uppercase",
                  letterSpacing: 0.4,
                }}
              >
                {f.label}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: 12,
                color: "black",
                fontWeight: f.file === "--" ? 400 : 500,
                wordBreak: "break-word",
                lineHeight: 1.4,
                textAlign: "start",
              }}
            >
              {f.file}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          bgcolor: "#fff",
          borderRadius: 2.5,
          border: "1px solid #e8eaf0",
          overflow: "hidden",
        }}
      >
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: "#f5f6fa" }}>
              {[
                "Route Name",
                "Type",
                "Status",
                "HB",
                "PB",
                "Effective Start",
                "Effective End",
                "",
              ].map((h) => (
                <TableCell
                  key={h}
                  sx={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#78909c",
                    py: 1.5,
                    textTransform: "uppercase",
                    letterSpacing: 0.3,
                    whiteSpace: "nowrap",
                  }}
                >
                  {h}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {routes.slice(page * 10, page * 10 + 10).map((r) => (
              <TableRow
                key={r.name}
                hover
                sx={{ "&:last-child td": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#263238",
                    py: 1.8,
                  }}
                >
                  {r.name}
                </TableCell>
                <TableCell sx={{ fontSize: 12, color: "#546e7a" }}>
                  {r.type}
                </TableCell>
                <TableCell>
                  <Chip
                    label={r.status}
                    size="small"
                    color={r.status === "Active" ? "success" : "default"}
                    sx={{ height: 20, fontSize: 11, fontWeight: 600 }}
                  />
                </TableCell>
                <TableCell sx={{ fontSize: 13, color: "#37474f" }}>
                  {r.hb}
                </TableCell>
                <TableCell sx={{ fontSize: 13, color: "#37474f" }}>
                  {r.pb}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 12,
                    color: "#546e7a",
                    whiteSpace: "nowrap",
                  }}
                >
                  {r.effectiveStart}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 12,
                    color: "#546e7a",
                    whiteSpace: "nowrap",
                  }}
                >
                  {r.effectiveEnd}
                </TableCell>
                <TableCell>
                  <IconButton size="small">
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={routes.length}
          page={page}
          onPageChange={(_, p) => setPage(p)}
          rowsPerPage={10}
          rowsPerPageOptions={[10]}
          sx={{ borderTop: "1px solid #f0f1f5", fontSize: 12 }}
        />
      </Box>

    

    <Box sx={{backgroundColor:"white",width:"100%",padding:1,marginTop:2 ,justifyContent:"space-between",display:"flex",alignItems:"center"}}>
        <Typography variant="h6" sx={{color:"blue",fontWeight:700}}>Users</Typography>
        <Button variant="outlined" sx={{borderColor:"darkblue",color:"darkblue"}} >Add User</Button>
    </Box>
    </Box>
  );
};

export default RightSection;
