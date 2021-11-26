import { createSlice } from '@reduxjs/toolkit';

export interface CartState {
  cart: Product[];
  totalItems: number;
  subtotal: number;
}

const initialState: CartState = {
  cart: [],
  totalItems: 0,
  subtotal: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: { type: string; payload: Product }) => {
      const idx = state.cart.findIndex((product) => product.id === action.payload.id);
      if (state.cart[idx]) {
        state.cart[idx].amount! += 1;
      } else {
        const product = { amount: 1, ...action.payload };
        state.cart.push(product);
      }
      state.totalItems += 1;
      state.subtotal += action.payload.price.raw;
    },
    removeFromCart: (state, action: { type: string; payload: Product }) => {
      const idx = state.cart.findIndex((product) => product.id === action.payload.id);
      if (state.cart[idx]?.amount === 1) {
        state.cart.splice(idx, 1);
      } else {
        state.cart[idx].amount! -= 1;
      }
      state.totalItems -= 1;
      state.subtotal -= action.payload.price.raw;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
