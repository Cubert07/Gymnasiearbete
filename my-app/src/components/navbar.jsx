import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <AppBar position="static" >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'inherit' }}>
          <Box
            component="nav"
            sx={{
              display: 'flex',
              gap: 2,
              alignItems: 'center',
              // make anchor links inherit the AppBar color and remove default underline
              '& a': {
                color: 'inherit',
                textDecoration: 'none',
                fontWeight: 500,
              },
              '& a:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </Box>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
