// Enkel Cart-kontekst som lagrar kundvagnen i lokal storage.
// Exponerar: `cart`, `setCart`, `addToCart`, `clearCart`, `handleRemoveItem`
import { Typography } from "@mui/material";
import React from "react";

const CartContext = React.createContext();

export function CartProvider({ children }) {
  // Initiera från localStorage för att behålla kundvagnen mellan sidladdningar
  const [cart, setCart] = React.useState(() => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  });

  // Synka localStorage varje gång cart ändras
  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Ta bort en produkt helt från kundvagnen
  const handleRemoveItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Lägg till produkt i kundvagnen. Om produkten redan finns, öka kvantiteten.
  const addToCart = (product, quantity) => {
    setCart((prev) => {
      const copy = [...prev];
      // Hitta om produkten redan finns i arrayen
      const existing = copy.find((c) => c.id === product.id);

      if (existing) {
        // Uppdatera befintlig kvantitet
        existing.quantity += quantity;
      } else {
        // Lägg till ny produktpost
        copy.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity,
        });
      }

      // Returnera den uppdaterade listan
      return copy;
    });
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, clearCart, handleRemoveItem }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook för att använda cart-konteksten i komponenter
export function useCart() {
  return React.useContext(CartContext);
}
