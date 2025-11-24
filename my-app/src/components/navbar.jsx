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
  Divider
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const drawerWidth = 240;

export default function NavBar() {
  const [open, setOpen] = React.useState(false);

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
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#f5f5f5"}}>
        <Toolbar>

          <IconButton color="inherit" edge="start" onClick={handleToggle}>
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={open}
        onClose={handleToggle}
        sx={{
          "& .MuiDrawer-paper": { width: { xs: "100%", sm: drawerWidth}, boxSizing: "border-box" }
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
