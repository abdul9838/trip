/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { products } from "./Products";

export const ProductContext = createContext();

const Context = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cartItems from localStorage on component mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Save cartItems to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const decreaseItem = (product) => {
    const updatedCart = cartItems.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 0 }
        : item
    );

    setCartItems(updatedCart);
    if (
      updatedCart.find((item) => item.id === product.id && item.quantity === 0)
    ) {
      removeFromCart(product);
    }
  };

  const discount = 5;

  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCart);
  };

  const totalPrice = cartItems.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );

  return (
    <ProductContext.Provider
      value={{
        products,
        cartItems,
        addToCart,
        removeFromCart,
        decreaseItem,
        totalPrice,
        discount,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default Context;
