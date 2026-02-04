import { Button, Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Shop from "./pages/shop";
import About from "./pages/about";
import Contact from "./pages/contact";
import ProductPage from "./pages/productPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <Box sx={{ mt: '10vh' }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:index" element={<ProductPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
      </Box>
    </Router>
    </>
  );
}

export default App;