import { Box } from "@mui/material";
import Data from "products"



export default function ProductDetails(index) {
  return (
    <>
      {Data.map((product) => (
          <Box
          key={product.id}
          sx={{
            backgroundColor: "#fff",
            p: 2,
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p><strong>{product.price} kr</strong></p>
        </Box>
      ))}
    </>
  );
}