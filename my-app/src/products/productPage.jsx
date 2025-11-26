import { Box, Button } from '@mui/material';

export default function ProductPage({ title, detailedDescription, description, price, image, altText }) {
    return (
        <Box
            sx={{
                mb: 2,
                backgroundColor: "#f5f5f5",
                p: 4,
                borderRadius: 2,
                textAlign: "center",
                width: "100%",
                display: "grid",
                 gridTemplateColumns: { 
                    xs: "1fr",
                    sm: "1fr 1fr",
                    md: "1fr 1fr" 
                 },
            }}
        >
            <Box
                sx={{
                    p: 4,
                    }}
                >
                <img
                    src={image}
                    alt={altText}
                    style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                /> 
            </Box>
            <Box 
                sx={{
                    p: 4,
                    textAlign: "left",
                    }}
                >
                <h1>{title}</h1>
                <p>{description}</p>
                <h2>Pris: {price} kr</h2>

                <Button variant="contained" color="secondary" href="/shop">
                    Beställ
                </Button>
                <Button variant="contained" color="" href="/shop">
                    Tillbaka till butiken
                </Button>
            </Box>
        </Box>
        
    );
}
