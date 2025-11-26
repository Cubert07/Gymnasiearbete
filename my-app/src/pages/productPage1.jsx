import { Box } from "@mui/material";

import products from "../products/products.json";
import ProductPage from "../products/productPage.jsx";



export default function ProductPage1() {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: "#f5f5f5",
                }}
            >
                <ProductPage
                    title={products["Produkt 1"].title}
                    detailedDescription={products["Produkt 1"].detailedDescription}
                    price={products["Produkt 1"].price}
                    image={products["Produkt 1"].image}
                    altText={products["Produkt 1"].altText}
                    description={products["Produkt 1"].description}
                />
            </Box>
        </>
    );
}