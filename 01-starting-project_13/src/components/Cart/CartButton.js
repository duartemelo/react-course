import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const handleOpenCart = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={handleOpenCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default CartButton;
