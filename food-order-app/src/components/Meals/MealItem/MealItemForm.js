import React, { useContext, useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";

const MealItemForm = props => {
  const [qty, setQty] = useState(1);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(qty);
    props.onAddItem(qty);
  }

  const onInputChangeHandler = (event) => {
    setQty(event.target.value);
    // console.log(event.target.value);
  }

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input label="Amount" input={{
        id: 'amount_' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
      }} value={qty} onChange={onInputChangeHandler}/>
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
