import { useState } from "react";
import {
  Box,
  Typography,

} from "@mui/material";

import ResponsiveAppBar from "./Heading";
import ClientsSection from "./ClientListSection";
import RightSection from "./RightSection";
import { ChatPanel } from "./ChatPanel";
// ─── Data ────────────────────────────────────────────────────────────────────

const clients = [
  { name: "Sacred Heart", status: "Active", routes: 8 },
  { name: "All Saints Medicine", status: "Active", routes: 5 },
  { name: "MASH Healthcare Collective", status: "Active", routes: 6 },
  { name: "Monarch Health", status: "Pending Setup", routes: 0 },
];

const users = [
  { name: "Alice Wang", email: "alice@sacredheart.org", role: "Admin" },
  { name: "Brian Torres", email: "btorres@sacredheart.org", role: "Viewer" },
];

export const statusColor: Record<string, "success" | "warning" | "default"> = {
  Active: "success",
  "Pending Setup": "warning",
  Deactivated: "default",
};



export default function App() {
  const [selectedClient, setSelectedClient] = useState<string>(
    clients[0].name ?? "",
  );
  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");

  const client = clients.find((c) => c.name === selectedClient) ?? clients[0];

  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f5f6fa" }}>
      <ChatPanel />

      <Box sx={{ flex: 1, overflow: "auto" }}>

        <ResponsiveAppBar />
        <Box sx={{ flex: 1, width: "100%" }}>
          <Typography
            sx={{
              color: "darkblue",
              font: 30,
              fontWeight: 600,
              p: 5,
              textAlign: "left",
            }}
            variant="h5"
          >
            Clients
          </Typography>
        </Box>
        <Box sx={{ flex: 1, overflow: "auto", display: "flex", px: 5 }}>
          <ClientsSection
            clients={clients}
            handleSetSearch={(val) => setSearch(val)}
            handleSetSelectedClient={(val) => setSelectedClient(val)}
            handleSetStatusFilter={(val) => setStatusFilter(val)}
            search={search}
            selectedClient={selectedClient}
            statusFilter={statusFilter}
          />

          <RightSection client={client}/>
        </Box>
      </Box>
    </Box>
  );
}
