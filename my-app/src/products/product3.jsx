import { Box, Button } from '@mui/material';

export default function Product1() {
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
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />

            <h2>Produkt 3</h2>
            <p>Premium produkt, extremt bra.</p>
            <p>1 299 kr</p>

            <Button variant="contained" color="secondary" href="contact">
                Läs mer
            </Button>
        </Box>
    );
}
