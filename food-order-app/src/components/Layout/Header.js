import React, { useContext } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import CartContext from "../../store/cart-context";

const Header = props => {
  //const cartCtx = useContext(CartContext);

  const onHeaderCartButtonClickHandler = () => {
    props.onShowCart();
  }

  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onHeaderCartButtonClickHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </React.Fragment>
  );
};

export default Header;
