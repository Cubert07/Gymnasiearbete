import products from "../products/products.json";
import Product from "../products/product.jsx";


import { Box } from '@mui/material';

const rows = [];

for (const key in products) {
    rows.push(
    <Product
        title={products[key].title}
        description={products[key].description}
        price={products[key].price}
        image={products[key].image}
        altText={products[key].altText}
        productLink={products[key].productLink}
    />
    )
}

export default function Shop() {
    return (
        <>
        <Box sx={{ textAlign: "center", backgroundColor: "#f5f5f5" , p: 1 }}>
            <h1>Våra produkter</h1>
            <p>Upptäck våra joysticks och tillbehör utvecklade<br /> för trygghet, precision och full kontroll</p>
        </Box>
        <Box 
            sx={{
                 textAlign: "center", 
                 p: 2,
                 backgroundColor: "#f5f5f5",
                 display: "grid",
                 gridTemplateColumns: { 
                    xs: "1fr",
                    sm: "1fr 1fr",
                    md: "1fr 1fr 1fr" 
                 },
                 gap: 2 
            }}
        >
            {rows}
        </Box>
        </>
    );
}