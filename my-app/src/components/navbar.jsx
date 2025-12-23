import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Stack,
  Button
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 240;

export default function NavBar() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setOpen(!open);
  };

  const menuItems = [
    { text: "Hem", path: "/" },
    { text: "Butik", path: "/shop" },
    { text: "Om oss", path: "/about" },
    { text: "Kontakta oss", path: "/contact" },
  ];

  const drawer = (
    <Box onClick={handleToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Moveable UF
      </Typography>



      <Divider />
      
      <List>
        {menuItems.map((item) => {
          const isActive = item.path === "/" ? location.pathname === "/" : location.pathname.startsWith(item.path);
          return (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                sx={{ textAlign: "center", borderBottom: isActive ? "3px solid black" : "3px solid transparent" }}
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ background: "#f5f5f5", color: "black" }}>
        <Toolbar sx={{ px: { xs: 3, sm: 3 }, py: { xs: 0, sm: 0} }}>

      {/* Visas på mindre skärm */}
        <Box  sx={{ display: { xs: "block", sm: "none" }, width: "100%" }}>

        <Stack direction={"row"} sx={{ width: "100%", justifyContent: "space-between", alignItems: "center" }}>

        {/* HAMBURGER - ALLTID SYNLIG */}
          <IconButton color="inherit" edge="start" onClick={handleToggle}>
            <MenuIcon />
          </IconButton>

          {/* DRAWER MENYN */}
      <Drawer
        anchor="left"
        open={open}
        onClose={handleToggle}
        sx={{
          "& .MuiDrawer-paper": { width: { xs: "100%", sm: drawerWidth }, boxSizing: "border-box" }
        }}
      >
        {drawer}
      </Drawer>
      
        {/* Bild för loga */}
        <Box component='img' sx={{ height: 50, pt: 1, mt: "5px", mr: 1 }} src="/loggaUF.png" alt="Logo" />
        </Stack>
      </Box>


      {/* Visas på störe skärm */}
      <Box sx={{ display: { xs: "none", sm: "block" }, width: "100%" }}>
        <Stack direction={"row"} sx={{ alignItems: "center", justifyContent: "space-between", px: 2 }}>
          <Box component='img' sx={{ height: 60, pt: 1, mt: "5px" }} src="/loggaUF.png" alt="Logo" />

          {/* Center area: takes remaining space and centers buttons within it */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", gap: 1, whiteSpace: "nowrap", overflowX: "auto" }}>

            {menuItems
              .filter((item) => item.path !== "/contact")
              .map((item) => {
                const isActive = item.path === "/" ? location.pathname === "/" : location.pathname.startsWith(item.path);
                return (
                  <Button
                    key={item.text}
                    component={Link}
                    to={item.path}
                    sx={{ textAlign: "center", fontWeight: 700, py: 1.5, px: 2, mx: 0.5, minWidth: "auto", whiteSpace: "nowrap", borderBottom: isActive ? "3px solid black" : "3px solid transparent", borderRadius: 0 }}
                    color="none"
                  >
                    {item.text}
                  </Button>
                );
              })}

          </Box>

          {/* Right-aligned contact button (independent width) */}
          <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
            {(() => {
              const contact = menuItems.find((i) => i.path === "/contact");
              const isActive = contact.path === "/" ? location.pathname === "/" : location.pathname.startsWith(contact.path);
              return (
                <Button
                  key={contact.text}
                  component={Link}
                  to={contact.path}
                  sx={{ textAlign: "center", fontWeight: 700, py: 1.5, px: 2, ml: 1, whiteSpace: "nowrap", borderBottom: isActive ? "3px solid black" : "3px solid transparent", borderRadius: 0, minWidth: "auto" }}
                  color="none"
                >
                  {contact.text}
                </Button>
              );
            })()}
          </Box>

        </Stack>
      </Box>
        </Toolbar>
      </AppBar>

    </Box>
  );
}
