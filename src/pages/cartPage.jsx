import {
  Container,
  Typography,
  Box,
  Button,
  Divider,
  Alert,
} from "@mui/material";
import { useCart } from "../components/cartContext.jsx";
import { Link as RouterLink } from "react-router-dom";

export default function CartPage() {
  const { cart, clearCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

    const handleCheckout = async () => {
      console.log("clicked")
      const res = await fetch("http://localhost:4000/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart }),
      });
  
      const data = await res.json();
      window.location.href = data.url;
    };


  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Kundvagn
      </Typography>

      {cart.length === 0 ? (
        <Typography>Din varukorg är tom</Typography>
      ) : (
        <>
          {cart.map((item) => (
            <Box key={item.id} sx={{ mb: 2 }}>
              <Typography>
                {item.title} – {item.quantity} st
              </Typography>
              <Typography color="text.secondary">
                {item.price} kr / st
              </Typography>
            </Box>
          ))}

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6">
            Totalt: {total} kr
          </Typography>

          <Alert severity="info" sx={{ my: 2 }}>
            Demo av betalflöde – inga riktiga pengar dras
          </Alert>

          <Button
            fullWidth
            size="large"
            variant="contained"
            onClick={handleCheckout}
          >
            Gå till checkout (demo)
          </Button>

          <Button
            component={RouterLink}
            to="/shop"
            sx={{ mt: 2 }}
          >
            Fortsätt handla
          </Button>
        </>
      )}
    </Container>
  );
}
