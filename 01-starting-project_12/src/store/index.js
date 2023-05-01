import { createSlice, configureStore } from "@reduxjs/toolkit";

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

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticaded: false,
  },
  reducers: {
    login(state) {
      state.isAuthenticaded = true;
    },
    logout(state) {
      state.isAuthenticaded = false;
    },
  },
});

// default reducer, without reducer toolkit
// const storeReducer = (state = initialState, action) => {
//   // NEVER MUTATE STATE! RETURN A NEW ONE
//   if (action.type === "increment") {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       ...state,
//       counter: state.counter + action.value,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       ...state,
//       shown: !state.shown,
//     };
//   }

//   return state;
// };

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
