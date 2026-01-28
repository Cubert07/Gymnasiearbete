import { Box, Typography } from '@mui/material';
import Product from '../components/product';



export default function Shop() {
    return (
        <>
        <Box sx={{ textAlign: "center" , p: 1, pt: "10vh" }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', pb: 1 }}>
            Våra produkter
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 600, margin: '0 auto' }}>
            Upptäck våra joysticks och tillbehör utvecklade<br /> för trygghet, precision och full kontroll
            </Typography>
        </Box>
        <Box 
            sx={{
                 textAlign: "center", 
                 p: 2,
                 display: "grid",
                 gridTemplateColumns: { 
                    xs: "1fr",
                    sm: "1fr 1fr",
                    md: "1fr 1fr 1fr" 
                 },
                 gap: 2 
            }}
        >
            <Product />
        </Box>
        </>
    );
}