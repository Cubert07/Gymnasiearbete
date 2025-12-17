import { useParams } from 'react-router-dom';
import { Data } from '../products/products';
import { Box, Typography, Button, Grid, Stack, Card } from '@mui/material';

export default function ProductPage() {
    const { index } = useParams();
    const product = Data[parseInt(index)];

    if (!product) {
        return <h1>Product not found</h1>;
    }

    return (
        <>
        <Box sx={{ padding: 4, margin: '0 auto', pt: "15vh" }}>
            <Stack direction={'row'}>

            {/* Section till vänster */}
            <Box>
            <Typography variant="h3" gutterBottom>
                {product.title}
            </Typography>
            <Box
                component="img"
                src={product.image}
                alt={product.title}
                sx={{ maxWidth: '100%', height: 'auto', borderRadius: 2, marginBottom: 2, maxWidth: 500 }}
                />
            </Box>
            

            {/* Section till höger */}
            <Card sx={{ p: 2, boxShadow: 3, borderRadius: 2, backgroundColor: "#fff", ml: 4 }}>
                    <Typography variant="h5" color="primary" gutterBottom>
                        {product.price} kr
                    </Typography>
                    <Typography variant="body1" paragraph>
                {product.description}
            </Typography>

        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}> 
            <Button variant="contained" color="primary">
                Köp Nu
            </Button>
            <Button variant="outlined" color="primary" href="/shop" sx={{ ml: 2 }}>
                Lägg till i varukorg
            </Button>
        </Box>
            </Card>
            </Stack>

        
        </Box>
        <Box>
            <Card sx={{ p: 2, boxShadow: 3, borderRadius: 2, backgroundColor: "#fff", mx: 4 }}>
                <Typography variant="h4" sx={{ p: 2 }}>
                    Produktdetaljer
                </Typography>
                <Typography variant="body1" sx={{ p: 2 }}>
                    {product.detailedDescription}
                </Typography>
            </Card>
        </Box>
        </>
    );
}