import { useParams } from 'react-router-dom';
import { Data } from '../products/products';
import { Box, Typography, Button } from '@mui/material';

export default function ProductPage() {
    const { index } = useParams();
    const product = Data[parseInt(index)];

    if (!product) {
        return <h1>Product not found</h1>;
    }

    return (
        <Box sx={{ padding: 4, maxWidth: 800, margin: '0 auto', pt: "15vh" }}>
            <Typography variant="h3" gutterBottom>
                {product.title}
            </Typography>
            <Box
                component="img"
                src={product.image}
                alt={product.title}
                sx={{ maxWidth: '100%', height: 'auto', borderRadius: 2, marginBottom: 2 }}
            />
            <Typography variant="h5" color="primary" gutterBottom>
                {product.price} kr
            </Typography>
            <Typography variant="body1" paragraph>
                {product.description}
            </Typography>
            <Button variant="contained" color="primary">
                Lägg till i varukorg
            </Button>
        </Box>
    );
}