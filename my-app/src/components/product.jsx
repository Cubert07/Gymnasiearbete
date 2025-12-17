import { Box, Typography, Grid, Button, Stack, Card } from '@mui/material';
import { Data } from "../products/products";
import { useNavigate } from "react-router-dom";
import ProductPage from '../pages/productPage';

export default function Product() {
  return (
    <>
      {Data.map((product, index) => (
          <>
          <Card sx={{ p: 2, boxShadow: 3, borderRadius: 2, backgroundColor: "#fff" }}>
          <Box sx={{m: '10px', p: '20px', pt: '5px'}}>

              <Typography variant='h4' sx={{fontWeight: 'bold'}}>
              {product.title}
              </Typography>

              <img src={product.image} style={{width: "100%", height: "auto", borderRadius: "10px"}}/>

              <Typography variant="body1" sx={{ fontWeight: 'bold', paddingTop: '10px' }}>
              { product.price } kr
              </Typography>

              <Typography variant="body2" sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
              { product.description }
              </Typography>

              <Button variant="contained" color="secondary" href={`/products/${index}`}>
                      Läs Mer
              </Button>

          </ Box>
          </Card>
          </>
        
    )
    )}

    </>
  );
}