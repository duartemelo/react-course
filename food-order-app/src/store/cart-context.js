import React, { useState } from "react";

const CartContext = React.createContext({
  cartStatus: false,
  cart: [],
  onCartOpen: () => {},
  onCartClose: () => {},
  onAddItemToCart: (item) => {},
  onRemoveItemFromCart: (item) => {},
}); // app or component wide state

export const CartContextProvider = (props) => {
  const [cartStatus, setCartStatus] = useState(false);
  const [cart, setCart] = useState([]);

  const onCartOpen = () => {
    setCartStatus(true);
  };

  const onCartClose = () => {
    setCartStatus(false);
  };

  const onAddItemToCartHandler = (item) => {
    console.log("add");
  };

  const onRemoveItemFromCartHandler = (item) => {
    console.log("remove");
  };

  return (
    <CartContext.Provider
      value={{
        cartStatus: cartStatus,
        cart: cart,
        onCartOpen: onCartOpen,
        onCartClose: onCartClose,
        onAddItemToCart: onAddItemToCartHandler,
        onRemoveItemFromCart: onRemoveItemFromCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
