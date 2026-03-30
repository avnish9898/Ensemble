import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import {
  FormControl,
  InputLabel,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const pages = ["CDM", "Clients"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const [cdmOptimization, setCdmOptimization] = React.useState("");
  const [selectedTab,setSelectedTab]=React.useState("Clients")

  const handleCdmOptimizationChange = (event: SelectChangeEvent) => {
    setCdmOptimization(event.target.value as string);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSelectedTab=(tab:string)=>{
    setSelectedTab(tab);
    handleCloseNavMenu()
  }

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <Container>
        <Toolbar disableGutters>
         <Box sx={{display:"flex",gap:2}}>

        {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
            <Box sx={{ ml: "auto" }}>
              <Avatar
                sx={{
                  color: "#fff",
                  bgcolor: "green",
                  width: 28,
                  height: 28,
                  fontSize: 20,
                  fontWeight: 700,
                }}
              >
                {">"}
              </Avatar>
            </Box>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: 22,
                color: "black",
                letterSpacing: "-0.3px",
              }}
              variant="h4"
            >
              ENSEMBLE
            </Typography>
          </Box>

          <Box sx={{ minWidth: 120, width: "fit-content" }}>
            <FormControl fullWidth >
              <InputLabel id="demo-simple-select-label">
                CDM Optimization
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={cdmOptimization}
                label="Age"
                onChange={handleCdmOptimizationChange}
                sx={{ width: "300px",borderBottom:"none" }}
                variant="standard"
                
              >
                <MenuItem value={"Optimization One"}>Optimization One</MenuItem>
                <MenuItem value={"Optimization Two"}>Optimization Two</MenuItem>
                <MenuItem value={"Optimization Three"}>
                  Optimization Three
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
         </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>handleSelectedTab(page)}
                sx={{ my: 2, color:selectedTab===page? "darkblue":"gray", display: "block" ,}}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{p:0,}}>
                <Avatar alt="Remy Sharp" sx={{backgroundColor:"white"}} >
                    <AccountCircleIcon  sx={{color:"black"}}/>
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
