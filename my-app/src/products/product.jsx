import { Box, Button } from '@mui/material';

import ProductPage1 from '../pages/productPage';

export default function Product({ title, description, price, image, altText, productLink }) {
    
    const handleClick = (temp) => {

        <ProductPage1 value={temp} />

    }

    return (
        <Box
            sx={{
                mb: 2,
                backgroundColor: "#ffffff",
                p: 2,
                borderRadius: 2,
                boxShadow: 3,
                textAlign: "center"
            }}
        >
            <img
                src={image}
                alt={altText}
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />

            <h2>{title}</h2>
            <p>{description}</p>
            <p>{price} kr</p>

            <Button variant="contained" color="secondary" href={productLink} onClick={() => handleClick(title)}>
                Läs mer
            </Button>
        </Box>
    );
}
