import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Box sx={{flexGrow: 1}}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link to="/">Hem</Link>
            <Link to="/shop">Butik</Link>
            <Link to="/about">Om oss</Link>
            <Link to="/contact">Kontakta oss</Link>
          </Box>
        </Typography>
        <Typography variant="h6" component="div">
          Moveable UF
        </Typography>
      </Toolbar>
    </AppBar>
    </Box>
  );
}
