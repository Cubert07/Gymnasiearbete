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
} from '@mui/material';
import React from 'react';

export default function ProductPage() {
    const { index } = useParams();
    const product = Data[parseInt(index)];
    const [quantity, setQuantity] = React.useState(1);
    const [snack, setSnack] = React.useState({ open: false, severity: 'success', message: '' });

        if (!product) {
                return <h1>Product not found</h1>;
        }

        const handleAddToCart = () => {
            const cart = JSON.parse(localStorage.getItem('cart') || '[]');
            const existing = cart.find((c) => c.id === product.id);
            if (existing) {
                existing.quantity += quantity;
            } else {
                cart.push({ id: product.id, title: product.title, price: product.price, quantity });
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            setSnack({ open: true, severity: 'success', message: 'Produkten lades till i varukorgen' });
        };

        // Related products: show top 4 by popularity excluding current product
        const related = Data
            .filter((p) => p.id !== product.id)
            .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
            .slice(0, 4);

        return (
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
                    <Link component={RouterLink} to="/shop" underline="hover" color="inherit">
                        Butik
                    </Link>
                    <Typography color="text.primary">{product.title}</Typography>
                </Breadcrumbs>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 2 }}>
                            <Box component="img" src={product.image} alt={product.altText || product.title} sx={{ width: '100%', height: 'auto', borderRadius: 2 }} />
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>{product.title}</Typography>
                        <Typography variant="h5" color="primary" gutterBottom>{product.price} kr</Typography>
                        <Typography variant="body1" paragraph>{product.description}</Typography>

                        <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 2 }}>
                            <TextField label="Antal" type="number" inputProps={{ min: 1 }} value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value || '1')))} sx={{ width: 120 }} />
                            <Button variant="contained" onClick={handleAddToCart}>Lägg till i varukorgen</Button>
                            <Button variant="outlined" component={RouterLink} to="/shop">Fortsätt handla</Button>
                        </Stack>

                        <Card sx={{ p: 2, mt: 4, boxShadow: 3 }}>{/* Details box */}
                            <Typography variant="h6">Produktdetaljer</Typography>
                            <Typography variant="body2" sx={{ mt: 1 }}>{product.detailedDescription}</Typography>
                        </Card>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 6 }}>
                    <Typography variant="h5" gutterBottom>Relaterade produkter</Typography>
                    <Grid container spacing={2}>
                        {related.map((p) => (
                            <Grid item key={p.id} xs={12} sm={6} md={3} sx={{ display: 'flex' }}>
                                <Card sx={{ width: '100%', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                    <CardActionArea
                                        component={RouterLink}
                                        to={`/product/${Data.findIndex((d) => d.id === p.id)}`}
                                        sx={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'stretch', height: '100%' }}
                                    >
                                        <Box component="img" src={p.image} alt={p.altText || p.title} sx={{ width: '100%', height: 160, objectFit: 'cover', flexShrink: 0 }} />
                                        <Box sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                            <Typography variant="subtitle1">{p.title}</Typography>
                                            <Typography variant="body2" color="text.secondary">{p.price} kr</Typography>
                                        </Box>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Snackbar open={snack.open} autoHideDuration={3000} onClose={() => setSnack((s) => ({ ...s, open: false }))} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                    <Alert severity={snack.severity} onClose={() => setSnack((s) => ({ ...s, open: false }))}>{snack.message}</Alert>
                </Snackbar>
            </Container>
        );
}