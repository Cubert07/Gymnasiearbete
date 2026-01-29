import { Box, Typography, Grid, Button, Stack, Card, CardMedia } from '@mui/material';
import { Data } from "../products/products";
import ProductPage from '../pages/productPage';

export default function Product({ items }) {
  const list = items || Data;

  return (
    <>
      {list.map((product) => {
        const index = Data.findIndex((p) => p.id === product.id);
        return (

          <Card key={product.id} sx={{ p: 2, boxShadow: 3, borderRadius: 2}}>
            <Box sx={{ m: '10px', p: '20px', pt: '5px' }}>

              <Typography variant='h4' sx={{ fontWeight: 'bold' }}>{product.title}</Typography>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                sx={{ width: "100%", height: "auto", borderRadius: "10px" }}
                />

              <Typography variant="body1" sx={{ fontWeight: 'bold', paddingTop: '10px' }}>{product.price} kr</Typography>

              <Typography variant="body2" sx={{ paddingTop: '10px', paddingBottom: '10px' }}>{product.description}</Typography>

              <Button variant="contained" color="secondary" href={`/product/${index}`}>
                Läs Mer
              </Button>

            </Box>
          </Card>
        );
      })}
    </>
  );
}