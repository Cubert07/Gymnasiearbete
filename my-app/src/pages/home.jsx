import NavBar from '../components/navbar';

import { Container, Typography } from '@mui/material';

export default function Home() {
    return (
        <>
        <NavBar />
        <Container>
            <Typography variant="h1">
                Välkommen till Moveable UF
            </Typography>
        </Container>
        </>
    );
}
