import { Box } from '@mui/material';

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

            <h2>Produkt 1</h2>
            <p>Mycket bra produkt, väldigt fin.</p>
            <p>299 kr</p>

            <Button variant="contained" color="secondary" href="contact">
                Läs mer
            </Button>
        </Box>
    );
}
