import { Box, Button } from "@mui/material";

export default function Product2() {
    return (
        <Box
            sx={{
                mb: 2,
                backgroundColor: "#ffffff",
                p: 2,
                borderRadius: 2,
                boxShadow: 3,
                textAlign: "center"
            }}
        >
            <img
                src="../public/image0.jpeg"
                alt="placeholder for product1"
                style={{ width: "100%", height: "auto", borderRadius: "8px", rotate: "180deg" }}
            />

            <h2>Produkt 2</h2>
            <p>Mycket bra produkt, väldigt fin.</p>
            <p>499 kr</p>

            <Button variant="contained" color="secondary" href="contact">
                Läs mer
            </Button>
        </Box>
    );
}
import { Box } from '@mui/material';

export default function Product2() {
    return (
        <>
        <Box sx={{ border: '1px solid black', borderRadius: '10px', padding: 2, margin: 2, textAlign: 'center' }}>
        <h2>Product 1</h2>
        <img src="https://placehold.co/600x400" alt="placeholder for product1" style={{ maxWidth: '20vw', height: 'auto' }}/>
        <p>This is a description for Product 2.</p>
        </Box>
        </>
    );
}