import { useContext } from "react";
import classes from "./Checkout.module.css";
import useInput from "../../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: streetValue,
    isValid: streetIsValid,
    hasError: streetHasError,
    valueChangeHandler: streetChangeHandler,
    inputBlurHandler: streetInputBlurHandler,
    reset: resetStreetInput,
  } = useInput(isNotEmpty);

  const {
    value: postalValue,
    isValid: postalIsValid,
    hasError: postalHasError,
    valueChangeHandler: postalChangeHandler,
    inputBlurHandler: postalInputBlurHandler,
    reset: resetPostalInput,
  } = useInput(isFiveChars);

  const {
    value: cityValue,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityInputBlurHandler,
    reset: resetCityInput,
  } = useInput(isNotEmpty);

  const confirmHandler = (event) => {
    event.preventDefault();

    const formIsValid =
      nameIsValid && streetIsValid && postalIsValid && cityIsValid;

    if (!formIsValid) {
      return;
    }

    const userData = {
      name: nameValue,
      street: streetValue,
      postal: postalValue,
      city: cityValue,
    };
    props.onConfirm(userData);

    resetNameInput();
    resetStreetInput();
    resetPostalInput();
    resetCityInput();
  };

  const nameControlClasses = `${classes.control} ${
    nameHasError && classes.invalid
  }`;

  const streetControlClasses = `${classes.control} ${
    streetHasError && classes.invalid
  }`;

  const postalControlClasses = `${classes.control} ${
    postalHasError && classes.invalid
  }`;

  const cityControlClasses = `${classes.control} ${
    cityHasError && classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={nameValue}
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameHasError && <p>Enter a valid name.</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={streetValue}
          onChange={streetChangeHandler}
          onBlur={streetInputBlurHandler}
        />
        {streetHasError && <p>Enter a valid street.</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={postalValue}
          onChange={postalChangeHandler}
          onBlur={postalInputBlurHandler}
        />
        {postalHasError && <p>Enter a valid postal.</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={cityValue}
          onChange={cityChangeHandler}
          onBlur={cityInputBlurHandler}
        />
        {cityHasError && <p>Enter a valid city.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
