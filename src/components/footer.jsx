import React from 'react';
import { Box } from '@mui/material';

export default function Footer() {
    return (
        <>
        <Box
            component="footer"
            sx={{
                backgroundColor: "primary.main",
                textAlign: "center",
                p: 2,
                mt: 4,
            }}>
            <p>&copy; {new Date().getFullYear()} Moveable UF. Alla rättigheter förbehållna.</p>
            </Box>
        </>
    );
}