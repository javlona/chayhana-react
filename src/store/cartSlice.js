import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      id: 1,
      name: "Palov",
      quantity: 2,
      unitPrice: 14,
      totalPrice: 28,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    deleteFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
    increaseQuantity(state, action) {},
    decreaseQuantity(state, action) {},
  },
});

export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
