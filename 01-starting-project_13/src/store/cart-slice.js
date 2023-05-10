import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  totalAmount: 0,
  products: [],
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    increase(state, action) {
      state.totalAmount += action.payload;
    },
    decrease(state, action) {
      state.totalAmount -= action.payload;
      if (state.totalAmount < 0) {
        state.totalAmount = 0;
      }
    },
    replaceCart(state, action) {
      state.totalAmount = action.payload.totalAmount;
      state.products = action.payload.products;
    },
    addProduct(state, action) {
      state.changed = true;
      const newProduct = action.payload;

      // verifica se o produto já existe
      const product = state.products.find(
        (product) => product.id === newProduct.id
      );

      if (product) {
        product.amount += newProduct.amount;
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
    removeProduct(state, action) {
      state.changed = true;
      const newProduct = action.payload;

      // o produto existe, neste caso
      const product = state.products.find(
        (product) => product.id === newProduct.id
      );
      if (product.amount > newProduct.amount) {
        product.amount -= newProduct.amount;
      } else {
        state.products.splice(state.products.indexOf(product), 1);
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

export const cartActions = cartSlice.actions;
export default cartSlice;
