import { useParams, Link as RouterLink } from 'react-router-dom';
import { Data } from '../products/products';
import {
    Box,
    Typography,
    Button,
    Grid,
    Stack,
    Card,
    CardActionArea,
    Container,
    Breadcrumbs,
    Link,
    TextField,
    Snackbar,
    Alert,
    Paper,
    Divider,
    Rating,
} from '@mui/material';
import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import { useCart } from '../components/cartContext.jsx';

export default function ProductPage() {
    const { index } = useParams();
    const product = Data[parseInt(index)];
    const [quantity, setQuantity] = React.useState(1);
    const [snack, setSnack] = React.useState({ open: false, severity: 'success', message: '' });
    const { addToCart } = useCart();

    if (!product) {
        return <h1>Product not found</h1>;
    }

    const handleAddToCart = () => {
      addToCart(product, quantity);
        
      setSnack({
        open: true,
        severity: "success",
        message: "Produkten lades till i varukorgen",
      });
    };


    const related = Data
        .filter((p) => p.id !== product.id)
        .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
        .slice(0, 4);

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4 }}>
                <Link component={RouterLink} to="/shop" underline="hover" color="inherit">
                    Butik
                </Link>
                <Typography color="text.primary">{product.title}</Typography>
            </Breadcrumbs>

            <Grid container spacing={6}>
                {/* Product Image */}
                <Grid item xs={12} md={5}>
                    <Paper
                        sx={{
                            p: 3,
                            boxShadow: 1,
                            bgcolor: '#f5f5f5',
                            borderRadius: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: 400,
                            sticky: 'top',
                            top: 20,
                        }}
                    >
                        <Box
                            component="img"
                            src={product.image}
                            alt={product.altText || product.title}
                            sx={{ width: '100%', height: 'auto', borderRadius: 2, maxHeight: 500, objectFit: 'contain' }}
                        />
                    </Paper>
                </Grid>

                {/* Product Info */}
                <Grid item xs={12} md={7}>
                    <Box>
                        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 1 }}>
                            {product.title}
                        </Typography>
                        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3 }}>
                            <Rating value={4.5} readOnly size="small" />
                            <Typography variant="body2" color="text.secondary">(128 recensioner)</Typography>
                        </Stack>
                        <Divider sx={{ mb: 3 }} />

                        <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold', mb: 3 }}>
                            {product.price} kr
                        </Typography>

                        <Typography variant="body1" paragraph sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}>
                            {product.description}
                        </Typography>

                        {/* Quantity and Cart */}
                        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
                            <Box>
                                <Typography variant="body2" sx={{ mb: 1 }}>Antal</Typography>
                                <TextField
                                    type="number"
                                    inputProps={{ min: 1 }}
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value || '1')))}
                                    sx={{ width: 80 }}
                                    size="small"
                                />
                            </Box>
                            <Button
                                variant="contained"
                                size="large"
                                onClick={handleAddToCart}
                                startIcon={<AddShoppingCartIcon />}
                                sx={{ minWidth: 200, py: 1.5, fontSize: '1rem' }}
                            >
                                Lägg till i varukorgen
                            </Button>
                        </Stack>

                        <Button
                            variant="outlined"
                            component={RouterLink}
                            to="/shop"
                            fullWidth
                            sx={{ mb: 4 }}
                        >
                            Fortsätt handla
                        </Button>

                        <Divider sx={{ mb: 3 }} />

                        {/* Trust Indicators */}
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={4}>
                                <Stack alignItems="center" spacing={1}>
                                    <LocalShippingIcon sx={{ fontSize: 28, color: 'primary.main' }} />
                                    <Typography variant="body2" align="center" sx={{ fontWeight: 'bold' }}>Snabb leverans</Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <Stack alignItems="center" spacing={1}>
                                    <SecurityIcon sx={{ fontSize: 28, color: 'primary.main' }} />
                                    <Typography variant="body2" align="center" sx={{ fontWeight: 'bold' }}>Säker betalning</Typography>
                                </Stack>
                            </Grid>
                        </Grid>

                        {/* Product Details Card */}
                        <Card sx={{ p: 3, mt: 4, boxShadow: 1, bgcolor: '#fafafa' }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Produktdetaljer
                            </Typography>
                            <Typography variant="body2" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                                {product.detailedDescription}
                            </Typography>
                        </Card>
                    </Box>
                </Grid>
            </Grid>

            {/* Related Products */}
            <Box sx={{ mt: 10 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 4 }}>
                    Relaterade produkter
                </Typography>
                <Grid container spacing={3}>
                    {related.map((p) => (
                        <Grid item key={p.id} xs={12} sm={6} md={3} sx={{ display: 'flex' }}>
                            <Card
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        boxShadow: 4,
                                        transform: 'translateY(-8px)',
                                    },
                                }}
                            >
                                <CardActionArea
                                    component={RouterLink}
                                    to={`/product/${Data.findIndex((d) => d.id === p.id)}`}
                                    sx={{
                                        textDecoration: 'none',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'stretch',
                                        height: '100%',
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={p.image}
                                        alt={p.altText || p.title}
                                        sx={{
                                            width: '100%',
                                            height: 180,
                                            objectFit: 'cover',
                                            flexShrink: 0,
                                            bgcolor: '#f5f5f5',
                                        }}
                                    />
                                    <Box sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                                            {p.title}
                                        </Typography>
                                        <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold', mt: 1 }}>
                                            {p.price} kr
                                        </Typography>
                                    </Box>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Snackbar
                open={snack.open}
                autoHideDuration={3000}
                onClose={() => setSnack((s) => ({ ...s, open: false }))}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert severity={snack.severity} onClose={() => setSnack((s) => ({ ...s, open: false }))}>
                    {snack.message}
                </Alert>
            </Snackbar>
        </Container>
    );
}