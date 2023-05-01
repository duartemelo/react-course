import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  shown: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState, // same as initialState: initialState
  reducers: {
    increment(state) {
      // here we can mutate state! but not in "normal" redux, redux toolkit creates a new state under the hood
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.shown = !state.shown;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;