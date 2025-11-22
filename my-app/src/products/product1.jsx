import { Box, Palette } from '@mui/material';

export default function Product1() {
    return (
        <>
        <Box sx={{ border: '1px solid black', borderRadius: '10px', padding: 2, margin: 2, textAlign: 'center'}}>
        <h2>Product 1</h2>
        <img src="https://placehold.co/600x400" alt="placeholder for product1" style={{ maxWidth: '20vw', height: 'auto' }}/>
        <p>This is a description for Product 1.</p>
        </Box>
        </>
    );
}