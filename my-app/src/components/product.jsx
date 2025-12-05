import { Box } from "@mui/material";
import { Data } from "../products/products";
import { useNavigate } from "react-router-dom";
import ProductPage from '../pages/productPage';

export default function Product() {
  return (
    <>
        {Data.map((product, index) => (
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
        
    )
    )}

    </>
  );
}