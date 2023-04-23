import { useState } from "react";

// const useInput = (inputValidatingFn) => { // my version, before lesson
//   const [enteredInput, setEnteredInput] = useState("");
//   const [enteredInputTouched, setEnteredInputTouched] = useState(false);

//   const enteredInputIsValid = inputValidatingFn(enteredInput);
//   const inputIsInvalid = !enteredInputIsValid && enteredInputTouched;

//   const inputChangeHandler = (event) => {
//     setEnteredInput(event.target.value);
//   };

//   const inputBlurHandler = () => {
//     setEnteredInputTouched(true);
//   };

//   return {
//     enteredInput,
//     setEnteredInput,
//     setEnteredInputTouched,
//     enteredInputIsValid,
//     inputIsInvalid,
//     inputChangeHandler,
//     inputBlurHandler,
//   };
// };

const useInput = (validateValueFn) => { // Maximilian Version
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setisTouched] = useState(false);

  const valueIsValid = validateValueFn(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setisTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setisTouched(false);
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
