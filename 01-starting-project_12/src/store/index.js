import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  shown: true,
};

createSlice(
  {
    name: 'counter',
    initialState, // same as initialState: initialState
    reducers: {
      increment(state) { // here we can mutate state! but not in "normal" redux, redux toolkit creates a new state under the hood
        state.counter++;
      },
      decrement(state) {
        state.counter--;
      },
      increase(state, action) {
        state.counter += action.value;
      },
      toggleCounter(state) {
        state.shown = !state.shown;
      }
    }
  }
);

const storeReducer = (state = initialState, action) => {
  // NEVER MUTATE STATE! RETURN A NEW ONE
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  if (action.type === "increase") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }
  if (action.type === "toggle") {
    return {
      ...state,
      shown: !state.shown,
    };
  }

  return state;
};

const store = createStore(storeReducer);

export default store;
