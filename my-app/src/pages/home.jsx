import { Box, Typography, Grid } from '@mui/material';
import products from "../products/products.json";
import Product from "../products/product.jsx";

const topThree = Object.values(products).sort((a, b) => b.popularity - a.popularity).slice(0, 3);

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
            <Typography variant="h3" sx={{ textAlign: 'center', pt: 5, pb: 2,  }}>
                Våra huvudprodukter
            </Typography>
            <Box sx={{
                 display: "grid",
                 gridTemplateColumns: { 
                    xs: "1fr",
                    sm: "1fr 1fr",
                    md: "1fr 1fr 1fr" 
                 },
                 gap: 10,
                    p: 5, 
            }}>
            {/* <Box sx={{ maxHeight: '30vh', height: '30vh' }}> */}
            {/* <Grid container spacing={3} sx={{ padding: '5vw', pl: '8vw', pr: '8vw' , alignContent: 'center', justifyContent: 'center' }}> */}
            {/* Products section */}
                {topThree.map((product) => (
                <Product
                    key={product.title}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                    altText={product.altText}
                    productLink={product.productLink}
                />
            ))}
            {/* </Grid> */}
            </Box>


        </Box>
        </>
    );
}