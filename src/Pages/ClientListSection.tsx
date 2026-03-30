import {
  Box,
  Typography,
  
  TextField,
  InputAdornment,
  
  Chip,
  Select,
  MenuItem,
  FormControl,
 
  Drawer,
  List,
  ListItemButton,
  ListItemText,

} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FilterListIcon from "@mui/icons-material/FilterList";

import { statusColor } from "./Ensemble";

export interface Client {
  name: string;
  status: string;
  routes: number;
}

const ClientsSection = ({
  selectedClient,
  handleSetSelectedClient,
  statusFilter,
  handleSetStatusFilter,
  search,
  handleSetSearch,
  clients,
}: {
  selectedClient: string;
  handleSetSelectedClient: (client: string) => void;
  clients: Client[];
  statusFilter: string;
  handleSetStatusFilter: (value: string) => void;
  search: string;
  handleSetSearch: (text: string) => void;
}) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 260,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 260,
          position: "relative",
          boxSizing: "border-box",
          bgcolor: "#fff",
          borderRight: "1px solid #e8eaf0",
          height: "100vh",
        },
      }}
    >
      {/* Client list header + filters */}
      <Box sx={{ p: 2, mb: 1 }}>
        <Typography
          sx={{
            fontSize: 13,
            fontWeight: 700,
            color: "#37474f",
            mb: 1.2,
            textAlign:"left"
          }}
        >
          Client List
        </Typography>
        <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
          <FormControl size="small" sx={{ minWidth: 90 }}>
            <Select
              value={statusFilter}
              onChange={(e) => handleSetStatusFilter(e.target.value)}
              displayEmpty
              renderValue={() => "Status"}
              sx={{ fontSize: 12, height: 30, bgcolor: "#f5f6fa" }}
              startAdornment={
                <FilterListIcon
                  sx={{ fontSize: 13, mr: 0.5, color: "#78909c" }}
                />
              }
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Pending Setup">Pending Setup</MenuItem>
            </Select>
          </FormControl>
          <TextField
            size="small"
            placeholder="Search"
            value={search}
            onChange={(e) => handleSetSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ fontSize: 14, color: "#90a4ae" }} />
                </InputAdornment>
              ),
              sx: { fontSize: 12, height: 30, bgcolor: "#f5f6fa" },
            }}
            sx={{ flex: 1 }}
          />
        </Box>
      </Box>

      {/* Client list items */}
      <List disablePadding sx={{ px: 1, overflowY: "auto" }}>
        {clients
          .filter(
            (c) =>
              (statusFilter === "all" || c.status === statusFilter) &&
              c.name.toLowerCase().includes(search.toLowerCase()),
          )
          .map((c) => {
            const idx = clients.indexOf(c);
            return (
              <ListItemButton
                key={c.name}
                selected={selectedClient === c.name}
                onClick={() => handleSetSelectedClient(c.name)}
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  py: 1.2,
                  px: 1.5,
                  "&.Mui-selected": {
                    bgcolor: "#e8eaf6",
                    "&:hover": { bgcolor: "#e8eaf6" },
                  },
                }}
              >
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#263238",
                      }}
                    >
                      {c.name}
                    </Typography>
                  }
                  secondary={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.8,
                        mt: 0.4,
                      }}
                    >
                      <Chip
                        label={c.status}
                        size="small"
                        color={statusColor[c.status]}
                        sx={{
                          height: 18,
                          fontSize: 10.5,
                          fontWeight: 600,
                        }}
                      />
                      <Typography sx={{ fontSize: 11, color: "#90a4ae" }}>
                        Routes {c.routes}
                      </Typography>
                    </Box>
                  }
                />
                <ChevronRightIcon sx={{ fontSize: 16, color: "#b0bec5" }} />
              </ListItemButton>
            );
          })}
      </List>
    </Drawer>
  );
};

export default ClientsSection;
