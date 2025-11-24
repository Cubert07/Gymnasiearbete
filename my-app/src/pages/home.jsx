import { Box, Typography, Grid } from '@mui/material';

import Product1 from '../products/product1';
import Product2 from '../products/product2';
import Product3 from '../products/product3';

export default function Home() {
    return (
        <>
        <Box>
            {/* Page container */}
            <Box sx={{ backgroundImage: "url('https://placehold.co/1920x400')", height: '400px',backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat',
                }}>

                    {/* Hero section */}

                <Box sx={{ width: '50vw', float: 'left', pl: '5vw', }}>

                    {/* Inside of hero */}

                    <Typography variant="h1">
                        <h5 style={{ paddingBottom: '0 vh' }}>
                            Full kontroll.
                            <br />
                            Högsta trygghet.
                        </h5>
                        
                        <p style={{ fontSize: '5vh' }}>
                            Joysticks som ger frihet att röra sig.
                        </p>
                    </Typography>
                </Box>
            </Box>
                
            <Grid container spacing={3} sx={{ padding: '5vw', pl: '8vw', pr: '8vw' , alignContent: 'center', justifyContent: 'center' }}>
            {/* Products section */}
                <Product1 />
                <Product2 />
                <Product3 />
            </Grid>


        </Box>
        </>
    );
}