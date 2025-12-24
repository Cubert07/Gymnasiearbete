import { Typography, Box, Paper } from "@mui/material";
import AdsClickIcon from '@mui/icons-material/AdsClick';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import SearchIcon from '@mui/icons-material/Search';
import DrawIcon from '@mui/icons-material/Draw';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export default function About() {
    return (
        <Box>
            <Box>
                <Box sx={{ width: '100%' }} component='img' src="https://placehold.co/1920x700" alt="Bild på permobil"/>
            </Box>
            <Box sx={{ p: 4, margin: '0 auto',  }}>
                <Typography variant="h3" gutterBottom>
                    Vilka vi är
                </Typography>
                <Typography variant="body1">
                    Moveable grundades med målet att förbättra mobilitetsteknik för personer som använder permobil. Med fokus på ergonomi, precision och hållbarhet utvecklar vi produkter som gör skillnad varje dag. Vårt team består av ingenjörer, designers och specialister inom hjälpmedel – alla drivna av samma vision: att skapa bättre möjligheter för människor att röra sig fritt.
                </Typography>
                <Typography variant="h3" gutterBottom sx={{ mt: 4 }}>
                    Vår vision & mission
                </Typography>
                <Box sx={{ display: 'flex'}}>
                    <Paper elevation={3} sx={{ p: 2, backgroundColor: '#ffffff', width: '48%', mr: '4%' }}>
                        <Typography variant="h6" gutterBottom>
                            <AdsClickIcon/> Vision
                        </Typography>
                        <Typography variant="body1">
                            Att ge alla användare den tryggaste och mest intuitiva körupplevelsen
                        </Typography>
                    </Paper>
                    <Paper elevation={3} sx={{ p: 2, backgroundColor: '#ffffff', width: '48%' }}>
                        <Typography variant="h6" gutterBottom>
                            <EmojiFlagsIcon/> Mission
                        </Typography>
                        <Typography variant="body1">
                            Att utveckla användarvänliga, pålitliga och anpassningsbara styrsystem för permobiler.
                        </Typography>
                    </Paper>
                </Box>
                <Typography variant="h3" gutterBottom sx={{ mt: 4 }}>
                    Hur vi arbetar
                </Typography>
                <Box sx={{ display: 'flex' }}>
                    <Paper elevation={0} sx={{ p: 2, backgroundColor: '#ffffff', width: '23%', mr: '2%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <SearchIcon sx={{ width: '10vw', height: 'auto' }}/> 
                        <Typography variant="body1">
                            Research och användarintervjuer
                        </Typography>
                    </Paper>
                    <Paper elevation={0} sx={{ p: 2, backgroundColor: '#ffffff', width: '23%', mr: '2%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <DrawIcon sx={{ width: '10vw', height: 'auto' }}/> 
                        <Typography variant="body1">
                            Design & ergonomi
                        </Typography>
                    </Paper>
                    <Paper elevation={0} sx={{ p: 2, backgroundColor: '#ffffff', width: '23%', mr: '2%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <CheckCircleOutlineIcon sx={{ width: '10vw', height: 'auto' }}/> 
                        <Typography variant="body1">
                            Test & kvalitetssäkring
                        </Typography>
                    </Paper>
                    <Paper elevation={0} sx={{ p: 2, backgroundColor: '#ffffff', width: '23%', mr: '2%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <SupportAgentIcon sx={{ width: '10vw', height: 'auto' }}/> 
                        <Typography variant="body1">
                            Support vidareutveckling
                        </Typography>
                    </Paper>
                </Box>
                <Typography variant="h3" gutterBottom sx={{ mt: 4 }}>
                    Teamet bakom Moveable
                </Typography>
                <Paper elevation={3} sx={{ p: 2, backgroundColor: '#ffffff', mb: 4, display: 'flex', justifyContent: 'space-around' }}>
                    <Box>
                        <Box component='img' src="../public/Placeholder_view_vector.svg.png" alt="Bild på William Cassirer"/>
                        <Typography variant="h6" gutterBottom>
                            William Cassirer
                        </Typography>
                        <Typography variant="body1">
                            Grundare & VD
                        </Typography>
                    </Box>
                    <Box>
                        <Box component='img' src="../public/Placeholder_view_vector.svg.png" alt="Bild på Albert Ahlqvist" />
                        <Typography variant="h6" gutterBottom>
                            Albert Ahlqvist
                        </Typography>
                        <Typography variant="body1">
                            Webmaster
                        </Typography>
                    </Box>
                    <Box>
                        <Box component='img' src="../public/Placeholder_view_vector.svg.png" alt="Bild på Victor Johansson" />
                        <Typography variant="h6" gutterBottom>
                            Victor Johansson
                        </Typography>
                        <Typography variant="body1">
                            Webmaster
                        </Typography>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
}