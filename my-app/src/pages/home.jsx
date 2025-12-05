import { Box, Typography, Grid, Button, Stack } from '@mui/material';
import { Link } from "react-router-dom";
import { Data } from '../products/products';
import { useNavigate } from "react-router-dom";
import ProductPage from '../pages/productPage';

export default function Home() {
    return (
        <>
        <Box>
            {/* Page container */}
            <Box sx={{ backgroundImage: "url('https://placehold.co/1920x500')", height: '500px',backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat',
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
                             textAlign: "center", 
                             p: 2,  
                             display: "grid",
                             gridTemplateColumns: { 
                                xs: "1fr",
                                sm: "1fr 1fr",
                                md: "1fr 1fr 1fr" 
                             },
                             gap: 2 
                        }}
                    >
                
                {Data.slice(0, 3).map((product, index) => (
                <>
                <ul style={{ margin: "10px", padding: "20px", paddingTop: "5px", border: "solid black", borderRadius: "10px"}}>

                    <h3>{product.title}</h3>

                    <img src={product.image} style={{width: "100%", height: "auto", borderRadius: "10px"}}/>

                    <b><p>{ product.price } kr</p></b>

                    <p>{ product.description }</p>

                    <button onClick={() => window.location.href = `/products/${index}`}>
                    Läs Mer
                </button>
                </ul>
                </>
            ))}
        </ Box>

        </Box>
        </>
    );
}