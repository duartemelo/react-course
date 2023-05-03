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
      const newProduct = action.payload;

      // verifica se o produto já existe
      const index = copiedProducts.findIndex(
        (product) => product.id === newProduct.id
      );
      if (index !== -1) {
        copiedProducts[index].amount += newProduct.amount;
      } else {
        copiedProducts.push(newProduct);
      }

      state.products = copiedProducts;

      // increase value
      cartSlice.caseReducers.increase(state, {
        payload: newProduct.amount,
        type: Number,
      });
    },
    remove_product(state, action) {
      let copiedProducts = [...state.products];
      const newProduct = action.payload;

      // o produto tem de existir!
      const index = copiedProducts.findIndex(
        (product) => product.id === newProduct.id
      );
      if (copiedProducts[index].amount > newProduct.amount) {
        copiedProducts[index].amount -= newProduct.amount;
      } else {
        copiedProducts.splice(index, 1);
      }

      state.products = copiedProducts;

      // decrease value
      cartSlice.caseReducers.decrease(state, {
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
