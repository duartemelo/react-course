import { useState } from "react";

const useInput = (inputValidatingFn) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [enteredInputTouched, setEnteredInputTouched] = useState(false);

  const enteredInputIsValid = inputValidatingFn(enteredInput);
  const inputIsInvalid = !enteredInputIsValid && enteredInputTouched;

  const inputChangeHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  const inputBlurHandler = () => {
    setEnteredInputTouched(true);
  };

  return {
    enteredInput,
    setEnteredInput, 
    setEnteredInputTouched, 
    enteredInputIsValid, 
    inputIsInvalid, 
    inputChangeHandler, 
    inputBlurHandler, 
  };
};

export default useInput;
