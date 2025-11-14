import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <AppBar position="static" >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
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
            <Link to="/">Hem</Link>
            <Link to="/shop">Butik</Link>
            <Link to="/about">Om oss</Link>
            <Link to="/contact">Kontakta oss</Link>
          </Box>
        </Typography>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            color: "inherit",
            textDecoration: "none",
            fontWeight: 700,
            letterSpacing: 1,
            flexGrow: 0,
          }}
        >
          Moveable UF
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
