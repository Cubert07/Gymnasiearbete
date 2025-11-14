import NavBar from "../components/navbar";
import Product1 from "../products/product1";

import { Container } from '@mui/system';

export default function Shop() {
    return (
        <>
        <NavBar />
        <Container>
        <h1>Welcome to the Shop Page</h1>
        <Product1 />
        </Container>
        </>
    );
}