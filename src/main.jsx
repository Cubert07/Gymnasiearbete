// Huvudfil för appen: renderar React-appen och wrappar den med globala providers.
// Provider-översikt:
// - ThemeProvider: tillhandahåller Material-UI-tema för hela appen
// - CssBaseline: normaliserar CSS och ger en konsekvent bas
// - CartProvider: global React-kontekst för kundvagnens tillstånd
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './components/cartContext.jsx'

import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme.jsx'


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
