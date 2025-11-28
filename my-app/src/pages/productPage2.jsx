import { Box } from "@mui/material";

import products from "../products/products.json";
import ProductPage from "../products/productPage.jsx";



export default function ProductPage2() {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: "#f5f5f5",
                }}
            >
                <ProductPage
                    title={products["Produkt 2"].title}
                    detailedDescription={products["Produkt 2"].detailedDescription}
                    price={products["Produkt 2"].price}
                    image={products["Produkt 2"].image}
                    altText={products["Produkt 2"].altText}
                    description={products["Produkt 2"].description}
                />
            </Box>
        </>
    );
}