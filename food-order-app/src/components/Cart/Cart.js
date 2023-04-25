import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";
import useHttp from "../../hooks/use-http";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [error, setError] = useState(null);

  const cartCtx = useContext(CartContext);
  const { sendRequest } = useHttp();

  const totalAmount = `$${Math.abs(cartCtx.totalAmount).toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    const cartItem = { ...item, amount: 1 };
    cartCtx.addItem(cartItem);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = (userData) => {
    setIsSubmitting(true);
    setError(null);
    sendRequest(
      {
        url: "https://react-http-de3a1-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { user: userData, orderedItems: cartCtx.items },
      },
      () => {}
    )
      .then(() => {
        cartCtx.clearCart();
      })
      .catch((err) => setError(err.message || "Something went wrong"))
      .finally(() => {
        setDidSubmit(true);
        setIsSubmitting(false);
      });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModelContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = <p>Successfully sent the order!</p>;

  const errorModalContent = <p>{error}</p>;

  return (
    <Modal backdropClick={props.onClose}>
      {!isSubmitting && !didSubmit && cartModelContent}
      {isSubmitting && isSubmittingModalContent}
      {didSubmit && !error && didSubmitModalContent}
      {didSubmit && error && errorModalContent}
    </Modal>
  );
};

export default Cart;
