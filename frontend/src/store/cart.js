// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const localProducts = JSON.parse(localStorage.getItem("click-products"));
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: localProducts || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: action.payload.quantity ? action.payload.quantity : 1,
        });
        localStorage.setItem("click-products", JSON.stringify(state.cart));
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload);
      item.quantity++;
      localStorage.setItem("click-products", JSON.stringify(state.cart));
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
      localStorage.setItem("click-products", JSON.stringify(state.cart));
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item._id !== action.payload
      );
      state.cart = removeItem;
      localStorage.setItem("click-products", JSON.stringify(state.cart));
    },
    emptyCart: (state,action) => {
      state.cart = [];
      localStorage.setItem("click-products", JSON.stringify(state.cart));
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  emptyCart,
} = cartSlice.actions;
