import react from 'react';
import { Box, Typography, Card, Grid } from '@mui/material';


export default function About() {
    return (
        <>
        <Box sx={{ textAlign: "center", p: 4, pt: "15vh" }}>
            <Typography variant="h3" gutterBottom>
                Om oss
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 800, margin: "0 auto", pb: 4 }}>
                Moveable UF är ett företag som specialiserar sig på att utveckla och sälja högkvalitativa joysticks för olika användningsområden. Vårt mål är att erbjuda produkter som kombinerar precision, hållbarhet och användarvänlighet för att möta behoven hos både hobbyister och professionella användare.
            </Typography>
            <Typography variant="h5" gutterBottom>
                Vår vision
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 800, margin: "0 auto", pb: 4 }}>
                Vi strävar efter att vara ledande inom joystick-industrin genom att kontinuerligt förbättra våra produkter och anpassa oss till den senaste teknologin. Vår vision är att skapa joysticks som inte bara uppfyller utan överträffar våra kunders förväntningar.
            </Typography>
            <Typography variant="h5" gutterBottom>
                Vårt team
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 800, margin: "0 auto" }}>
                Vårt team består av passionerade ingenjörer och designers som är dedikerade till att skapa innovativa lösningar för våra kunder. Vi arbetar tillsammans för att säkerställa att varje joystick vi producerar är av högsta kvalitet och prestanda.
            </Typography>
        </Box>
        </>
    );
}