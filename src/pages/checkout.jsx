// Kassa-sida: formulär för att samla in leverans- och betalningsuppgifter
// - Validerar enkla fält och simulerar orderplacering
// - Rensar kundvagnen och navigerar tillbaka till startsidan efter beställning
import { Box, Container, Grid, TextField, Button, Card, CardContent, Typography, Stack, Divider, Alert } from '@mui/material';
import { useState } from 'react';
import { useCart } from '../components/cartContext';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });
  
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateTotal = () => {
    // Summera pris * kvantitet för varje artikel
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.address || 
        !formData.city || !formData.cardNumber || !formData.cardName || !formData.expiryDate || !formData.cvv) {
      alert('Vänligen fyll i alla fält');
      return;
    }

    // Simulera orderplacering: visa tack-sida och rensa kundvagnen efter en stund
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 2000);
  };

  if (orderPlaced) {
    return (
      <Container maxWidth="sm" sx={{ py: 10, textAlign: 'center' }}>
        <Box sx={{ mb: 3 }}>
          <ShoppingCartIcon sx={{ fontSize: 80, color: 'secondary.main' }} />
        </Box>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          Tack för din beställning!
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
          Din order har mottagits och är under behandling. Du kommer att få en bekräftelse på din e-post.
        </Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={() => navigate('/')}
          sx={{ textTransform: 'none', borderRadius: 2, px: 4 }}
        >
          Tillbaka till hemma
        </Button>
      </Container>
    );
  }

  if (cart.length === 0 && !orderPlaced) {
    return (
      <Container maxWidth="sm" sx={{ py: 10, textAlign: 'center' }}>
        <ShoppingCartIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Din kundvagn är tom
        </Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={() => navigate('/shop')}
          sx={{ textTransform: 'none', borderRadius: 2 }}
        >
          Fortsätt handla
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* Header */}
      <Box sx={{ mb: 5, textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
          Kassa
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Slutför din beställning
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Left side - Form */}
        <Grid item xs={12} md={7}>
          <Card sx={{ boxShadow: 2, borderRadius: 2 }}>
            <CardContent sx={{ p: 4 }}>
              <form onSubmit={handleSubmitOrder}>
                {/* Personal Information */}
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Personlig information
                </Typography>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Förnamn"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      variant="outlined"
                      size="small"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Efternamn"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      variant="outlined"
                      size="small"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="E-post"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      variant="outlined"
                      size="small"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Telefon"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                </Grid>

                <Divider sx={{ my: 3 }} />

                {/* Shipping Address */}
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Leveransadress
                </Typography>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Adress"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      variant="outlined"
                      size="small"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Postnummer"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Stad"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      variant="outlined"
                      size="small"
                      required
                    />
                  </Grid>
                </Grid>

                <Divider sx={{ my: 3 }} />

                {/* Payment Information */}
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Betalningsinformation
                </Typography>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Kortinnehavare"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      variant="outlined"
                      size="small"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Kortnummer"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      variant="outlined"
                      size="small"
                      placeholder="0000 0000 0000 0000"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Utgångsdatum (MM/YY)"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      variant="outlined"
                      size="small"
                      placeholder="MM/YY"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="CVV"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      variant="outlined"
                      size="small"
                      placeholder="000"
                      required
                    />
                  </Grid>
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  sx={{
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    borderRadius: 2,
                    mt: 2,
                    '&:hover': { transform: 'translateY(-2px)', boxShadow: 4 },
                  }}
                >
                  Slutför beställning
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>

        {/* Right side - Order Summary */}
        <Grid item xs={12} md={5}>
          <Card sx={{ boxShadow: 2, borderRadius: 2, position: 'sticky', top: '12vh' }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Orderöversikt
              </Typography>
              
              <Stack spacing={2} sx={{ mb: 3, maxHeight: '400px', overflowY: 'auto' }}>
                {cart.map((item) => (
                  <Box key={item.id}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                          {item.title}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          Mängd: {item.quantity}
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        {(item.price * item.quantity).toFixed(2)} kr
                      </Typography>
                    </Stack>
                    <Divider sx={{ my: 1 }} />
                  </Box>
                ))}
              </Stack>

              <Divider sx={{ my: 2 }} />

              {/* Price Summary */}
              <Stack spacing={1.5} sx={{ mb: 3 }}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2">Delsumma:</Typography>
                  <Typography variant="body2">{calculateTotal()} kr</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2">Frakt:</Typography>
                  <Typography variant="body2">Gratis</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between" sx={{ mt: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Totalt:</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
                    {calculateTotal()} kr
                  </Typography>
                </Stack>
              </Stack>

              <Alert severity="info" sx={{ borderRadius: 1 }}>
                <Typography variant="caption">
                  Gratis frakt på alla beställningar. Leverans inom 3-5 arbetsdagar.
                </Typography>
              </Alert>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}