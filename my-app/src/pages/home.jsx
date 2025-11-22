import { Box, Typography } from '@mui/material';

export default function Home() {
    return (
        <>
        <Box 
            sx={{ 
                backgroundImage: "url('https://placehold.co/1920x400')", 
                height: '400px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                }}>
            <Box 
            sx={{ 
                width: '50vw',
                float: 'left',
                pl: '5vw',
             }}>
                <Typography variant="h1">
                    <h5 style={{ paddingBottom: '0 vh' }}>
                        Full kontroll.
                    <br />
                        Högsta trygghet.</h5>
                    <p style={{ fontSize: '5vh' }}>Joysticks som ger frihet att röra sig.</p>


                </Typography>
            </Box>
        </Box>
        </>
    );
}