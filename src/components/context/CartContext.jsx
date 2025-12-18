import { createContext, useContext, useEffect, useState } from "react";
import { getCart, addToCartAPI } from "../../api/api";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCart = async () => {
    const data = await getCart();
    setCart(data);
  };

  const addToCart = async (productId) => {
    setLoading(true);
    const updatedCart = await addToCartAPI(productId);
    setCart(updatedCart); // 🔥 IMPORTANT: update immediately
    setLoading(false);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // helper: get quantity of a product
  const getQuantity = (productId) => {
    const item = cart?.cart_items?.find(
      (i) => i.product_id === productId
    );
    return item ? item.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, getQuantity, loading }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
