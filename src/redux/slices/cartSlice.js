import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: null,        // backend cart object
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    fetchCartBegin(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCartSuccess(state, action) {
      state.loading = false;
      state.cart = action.payload;
    },
    fetchCartFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    addToCartBegin(state) {
      state.loading = true;
      state.error = null;
    },
    addToCartSuccess(state, action) {
      state.loading = false;
      state.cart = action.payload; // 🔥 update immediately
    },
    addToCartFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCartBegin,
  fetchCartSuccess,
  fetchCartFailure,
  addToCartBegin,
  addToCartSuccess,
  addToCartFailure,
} = cartSlice.actions;

export default cartSlice.reducer;
