import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Divider, Stack, Button, Collapse, Card, CardActionArea, Badge, CardMedia, CardContent, ClickAwayListener, Slide} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link, useLocation } from "react-router-dom";
import { useCart } from "./cartContext.jsx";
import DeleteIcon from '@mui/icons-material/Delete';

const drawerWidth = 240;

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [cartOpen, setCartOpen] = React.useState(false);
  

  const location = useLocation();

  

  const handleToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: "Hem", path: "/" },
    { text: "Butik", path: "/shop" },
    { text: "Om oss", path: "/about" },
    { text: "Kontakta oss", path: "/contact" },
  ];

  const { cart, clearCart, handleRemoveItem } = useCart();

  function handleCartOpen() {
    setCartOpen(!cartOpen);
  }
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
      <AppBar>
        <Toolbar sx={{ px: { xs: 3, sm: 3 }, py: { xs: 0, sm: 0} }}>

      {/* Visas på mindre skärm */}
        <Box  sx={{ display: { xs: "block", md: "none" }, width: "100%" }}>

        <Stack direction={"row"} sx={{ width: "100%", justifyContent: "space-between", alignItems: "center" }}>

        {/* HAMBURGER - ALLTID SYNLIG */}
          <IconButton color="inherit" edge="start" onClick={handleToggle}>
            <MenuIcon />
          </IconButton>

          {/* DRAWER MENYN */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleToggle}
        sx={{
          "& .MuiDrawer-paper": { width: { xs: "100%", sm: drawerWidth }, boxSizing: "border-box" }
        }}
      >
        {drawer}
      </Drawer>
      
        {/* Bild för loga (klickbar till startsidan) */}
        <Box component={Link} to="/" aria-label="Gå till startsidan" sx={{ display: "inline-flex" }}>
          <Box component='img' sx={{ height: 50, pt: 1, mt: "5px", mr: 1 }} src="/loggaUF.png" alt="Moveable UF logotyp" />
        </Box>
        </Stack>
      </Box>


      {/* Visas på störe skärm */}
      <Box sx={{ display: { xs: "none", md: "block" }, width: "100%" }}>
        <Stack direction={"row"} sx={{ alignItems: "center", justifyContent: "space-between", px: 2 }}>
          <Box component={Link} to="/" aria-label="Gå till startsidan" sx={{ display: "inline-flex" }}>
            <Box component='img' sx={{ height: 60, pt: 1, mt: "5px", cursor: "pointer" }} src="/loggaUF.png" alt="Moveable UF logotyp" />
          </Box>

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
            <ClickAwayListener onClickAway={() => setCartOpen(false)}>
              <Box>
                <IconButton onClick={handleCartOpen}>
                  <Badge badgeContent={cart.reduce((total, item) => total + item.quantity, 0)} color="secondary">
                    <ShoppingBasketIcon />
                  </Badge>
                </IconButton>
                
                <Slide direction="left" in={cartOpen} mountOnEnter unmountOnExit>
                  <Box sx={{ position: 'absolute', top: 64, right: 16, width: 300, bgcolor: 'background.paper', boxShadow: 3, borderRadius: 2, zIndex: 1300 }}>
                    <Card>
                        {cart.map((item) => (
                          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}} key={item.id}>
                            <CardMedia 
                              component="img"
                              height="40"
                              sx={{ width: 40, objectFit: 'cover', m: 1 }}
                              image={item.image} 
                              />
                            <CardContent>
                            <Typography variant="h6" sx={{ p: 2 }} key={item.id}>
                              {item.title} - {item.quantity} st
                            </Typography>
                            </CardContent>

                              <IconButton onClick={() => handleRemoveItem(item.id)}>
                                <DeleteIcon/>
                              </IconButton>

                          </Box>
                        ))}

                        {cart.length === 0 ? (
                          <Typography variant="body1" sx={{ p: 2 }}>Varukorgen är tom</Typography>
                        ) : (
                          <CardActionArea>
                          <Button fullWidth onClick={clearCart}>Rensa varukorg</Button>
                          </CardActionArea>
                        )}
                    </Card>
                  </Box>
                </Slide>
              </Box>
            </ClickAwayListener>
        </Stack>
      </Box>
        </Toolbar>
      </AppBar>

    </Box>
  );
}
