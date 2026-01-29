import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './components/cartContext.jsx'

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

const theme = createTheme({
palette: {
    type: 'light',
    primary: {
      main: '#ffecb3',
      contrastText: '#000000',
      light: '#fffde7',
      dark: '#ffcc80',
    },
    secondary: {
      main: '#66bb6a',
      light: '#a5d6a7',
      dark: '#2e7d32',
      contrastText: '#ffffff',
    },
    background: {
      default: '#e3f2fd',
      paper: '#fffbed',
    },
  },
  typography: {
    h1: {
      fontSize: '4rem',
      fontWeight: 200,
    },
  },
})



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <CartProvider>
      <App />
    </CartProvider>
    </ThemeProvider>
  </StrictMode>,
)
