import { createTheme,  } from '@mui/material/styles';

const theme = createTheme({
palette: {
    primary: {
      main: '#4fc3f7',
    },
    secondary: {
      main: '#9c27b0',
    },
    mode: 'light',
    background: {
      paper: '#fffef7',
    },
    text: {
      primary: '#424242',
      secondary: '#212121',
      disabled: '#757575',
      hint: '#212121',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {  
    h1: {
      fontSize: '5rem',
      '@media (max-width: 960px)': {
        fontSize: '3.5rem',
      },
      '@media (max-width: 600px)': {
        fontSize: '2.5rem',
      },
    },
  },
});

export default theme;