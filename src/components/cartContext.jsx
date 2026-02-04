import React from "react";

const CartContext = React.createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = React.useState(() => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  });

  // Synka localStorage varje gång cart ändras
  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity) => {
    setCart((prev) => {
      const copy = [...prev];
      const existing = copy.find((c) => c.id === product.id);

      if (existing) {
        existing.quantity += quantity;
      } else {
        copy.push({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity,
        });
      }

      return copy;
    });
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return React.useContext(CartContext);
}
