import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const addItemHandler = (qty) => {
    cartCtx.onAddItemToCart({
      id: props.id,
      name: props.name,
      description: props.description,
      price: price,
      amount: qty
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddItem={addItemHandler} />
      </div>
    </li>
  );
};

export default MealItem;
