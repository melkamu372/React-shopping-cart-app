import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setCartItemsCount((prevCount) => prevCount + 1);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    setCartItemsCount((prevCount) => prevCount - 1);
  };

  const clearCart = () => {
    setCartItems([]);
    setCartItemsCount(0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        cartItemsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};