import { Box, Typography, Grid, Button, Stack, Card, Divider, CardMedia, Chip } from '@mui/material';
import { Link } from "react-router-dom";
import { Data } from '../products/products';
import ProductPage from '../pages/productPage';

export default function Home() {
    return (
        <>
        <Box>
            {/* Page container */}
            <Box sx={{ backgroundImage: "url('image0.jpeg')", height: '500px',backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat',
                }}>

                    {/* Hero section */}

                <Box sx={{ width: '50vw', float: 'left', pl: '5vw', }}>

                    {/* Inside of hero */}

                        <Stack direction="column" spacing={0}>
                            <Typography variant="h1" sx={{pt: '2vh', fontWeight: 'bold'}}>Full kontroll.</Typography>
                            <Typography variant="h1" sx={{pt: '2vh', fontWeight: 'bold'}}>Högsta trygghet.</Typography>
                        </Stack>    

                    <Typography variant='h5' sx={{ pt: 3 }}>
                            Joysticks som ger frihet att röra sig.
                    </Typography>

                                <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                                    <Button
                                        component={Link}
                                        to="/shop"
                                        variant="contained"
                                        color="secondary"
                                        sx={{
                                            px: 3,
                                            py: 1.2,
                                            textTransform: 'none',
                                            borderRadius: 2,
                                            boxShadow: 2,
                                            fontWeight: 600,
                                            '&:hover': { transform: 'translateY(-2px)', boxShadow: 4 },
                                        }}
                                    >
                                        Utforska våra joysticks
                                    </Button>

                                    <Button
                                        component={Link}
                                        to="/contact"
                                        variant="outlined"
                                        color="secondary"
                                        sx={{ px: 3, py: 1.2, textTransform: 'none', borderRadius: 2 }}
                                    >
                                        Kontakta oss
                                    </Button>
                                </Stack>
                    

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

            {/* </Grid> */}
            </Box>
            
            <Box 
                sx={{
                    p: 2,  
                    textAlign: "center", 
                    display: "grid",
                    gridTemplateColumns: { 
                       xs: "1fr",
                       sm: "1fr 1fr",
                       md: "1fr 1fr 1fr" 
                    },
                    gap: 2 
                }}>
                
                {(() => {
                    // Show top 3 products by popularity
                    const topProducts = Data.slice().sort((a, b) => (b.popularity || 0) - (a.popularity || 0)).slice(0, 3);
                    return topProducts.map((product) => {
                        const originalIndex = Data.findIndex((p) => p.id === product.id);
                        return (
                            <Card key={product.id} sx={{ p: 2, boxShadow: 3, borderRadius: 2, backgroundColor: "#fff" }}>
                                <Box sx={{ m: '10px', p: '20px', pt: '5px' }}>
                                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                                        <Typography variant='h4' sx={{ fontWeight: 'bold' }}>{product.title}</Typography>
                                        <Chip label={`Popularitet: ${product.popularity ?? 0}`} size="small" color="secondary" />
                                    </Stack>

                                    <CardMedia
                                        component="img"
                                        image={product.image}
                                        alt={product.title}
                                        sx={{ width: "100%", height: "auto", borderRadius: "10px", mt: 2 }}
                                    />

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', paddingTop: '10px' }}>
                                        {product.price} kr
                                    </Typography>

                                    <Typography variant="body2" sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
                                        {product.description}
                                    </Typography>

                                    <Button variant="contained" color="secondary" href={`/product/${originalIndex}`}>
                                        Läs Mer
                                    </Button>
                                </Box>
                            </Card>
                        );
                    });
                })()}
        </Box>
       </Box>
      </>
    );
}