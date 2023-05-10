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
      const newProduct = action.payload;

      // verifica se o produto já existe
      const index = state.products.findIndex(
        (product) => product.id === newProduct.id
      );
      if (index !== -1) {
        state.products[index].amount += newProduct.amount;
      } else {
        state.products.push(newProduct);
      }

      // increase value
      cartSlice.caseReducers.increase(state, {
        // could do state.totalAmount += newProduct.amount, but in decrease, there is a verification!
        payload: newProduct.amount,
        type: Number,
      });
    },
    remove_product(state, action) {
      const newProduct = action.payload;

      // o produto existe, neste caso
      const index = state.products.findIndex(
        (product) => product.id === newProduct.id
      );
      if (state.products[index].amount > newProduct.amount) {
        state.products[index].amount -= newProduct.amount;
      } else {
        state.products.splice(index, 1);
      }

      // decrease value
      cartSlice.caseReducers.decrease(state, {
        // could do state.totalAmount -= newProduct.amount, but in decrease, there is a verification!
        payload: newProduct.amount,
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
