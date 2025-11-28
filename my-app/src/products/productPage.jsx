import { Box, Button, Typography } from '@mui/material';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';


export default function ProductPage({ title, detailedDescription, description, price, image, altText }) {
    return (
        <Box sx={{ p: 5, gap: 3, display: "flex", flexDirection: "column" }}>
            <Box
                sx={{
                    mb: 2,
                    backgroundColor: "#f5f5f5",
                    gap: 4,
                    borderRadius: 2,
                    textAlign: "center",
                    width: "100%",
                    display: "grid",
                     gridTemplateColumns: { 
                        xs: "1fr",
                        sm: "1fr 1fr",
                        md: "1fr 1fr" 
                     },
                }}
            >
                <Box>
                    <img
                        src={image}
                        alt={altText}
                        style={{ width: "60%", height: "auto", borderRadius: "8px" }}
                    /> 
                </Box>
                <Box 
                    sx={{
                        p: 1,
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        maxHeight: '70vh',
                        }}
                    >
                    <Box sx={{ maxHeight: '30vh', maxWidth: '20vw'}}>
                        <Typography sx={{fontWeight: 'bold'}} variant="h4">{title}</Typography>
                    </Box>
                    <Typography>{description}</Typography>
                    <Typography sx={{fontWeight: 'bold'}} variant="h5">Pris: {price} kr</Typography>
                    <Box sx={{ display: "flex", gap: 2 }}>
                        <Button variant="contained" color="secondary" href="/shop" style={{ width: "30%" }}>
                            Beställ
                        </Button>
                        <Button variant="contained" color="" href="/shop">
                            Kontakta oss
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: '#ffffff', borderRadius: 2, boxShadow: 3, p: 3 }}>
                <Box sx={{ display: 'flex'}}>
                    <Box sx={{ display: 'flex', width: '50%'}}>
                        <VerifiedUserOutlinedIcon sx={{ fontSize: '15vh' }} />
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', pl: 2 }}>
                            <Typography sx={{ m: 0, fontWeight: 'bold' }} variant="h4">Tålig konstruktion</Typography>
                            <Typography variant="h6" sx={{ m: 0 }}>Byggd för dagligt bruk</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex'}}>
                        <ExtensionOutlinedIcon sx={{ fontSize: '15vh' }} />
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', pl: 2 }}>
                            <Typography sx={{ m: 0, fontWeight: 'bold' }} variant="h4">Universiell kompatiblitet</Typography>
                            <Typography variant="h6" sx={{ m: 0 }}>Passar de flesta permobiler</Typography>
                        </Box>
                    </Box>
                </Box>
                <p>{detailedDescription}</p>
            </Box>
        </Box>
    );
}