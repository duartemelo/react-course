import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  show: false,
  totalAmount: 0,
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggle(state) {
      state.show = !state.show;
    },
    increase(state, action) {
      state.totalAmount += action.payload;
    },
    decrease(state, action) {
      state.totalAmount -= action.payload;
      if (state.totalAmount < 0) {
        state.totalAmount = 0;
      }
    },
    add_product(state, action) {
      let copiedProducts = [...state.products];

      // verifica se o produto já existe
      const index = copiedProducts.findIndex(
        (product) => product.title === action.payload.title
      );
      if (index !== -1) {
        copiedProducts[index].amount += action.payload.amount;
      } else {
        copiedProducts.push(action.payload);
      }

      state.products = copiedProducts;

      // increase value
      cartSlice.caseReducers.increase(state, {
        payload: action.payload.amount,
        type: Number,
      });
    },
    remove_product(state, action) {
      let copiedProducts = [...state.products];

      // o produto tem de existir!
      const index = copiedProducts.findIndex(
        (product) => product.title === action.payload.title
      );
      if (copiedProducts[index].amount > action.payload.amount) {
        copiedProducts[index].amount -= action.payload.amount;
      } else {
        console.log("slice");
        copiedProducts.splice(index, 1);
      }

      state.products = copiedProducts;

      // increase value
      cartSlice.caseReducers.decrease(state, {
        payload: action.payload.amount,
        type: Number,
      });
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export const cartActions = cartSlice.actions;
export default store;
