import { Box } from "@mui/material";

export default function Product1() {
    return (
        <>
        <Box sx={{ mb: 2 }}>
            <img src="../public/image0.jpeg" alt="placeholder for product1" style={{ maxWidth: '20vw', height: 'auto' }}/>
            <h2>Product 1</h2>
            <p>This is a description for Product 1.</p>
        </Box>
        </>
    );
}