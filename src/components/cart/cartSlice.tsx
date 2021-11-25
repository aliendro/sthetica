import { createSlice } from '@reduxjs/toolkit';

export interface CartState {
  cart: Product[];
  amount: number;
  totalPrice: Price;
}

const initialState: CartState = {
  cart: [],
  amount: 0,
  totalPrice: {
    raw: 0,
    withSymbol: 'R$ 0',
  },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.amount = state.cart.push(action.payload);
      state.totalPrice.raw = state.cart.reduce((acc, item) => acc + item.price.raw, 0);
      state.totalPrice.withSymbol = `R$ ${state.totalPrice.raw}`;
    },
    removeFromCart: (state, action) => {
      const idx = state.cart.findIndex((product) => product.id === action.payload.id);
      state.cart.splice(idx, 1);
      state.amount = state.cart.length;
      state.totalPrice.raw = state.cart.reduce((acc, item) => acc + item.price.raw, 0);
      state.totalPrice.withSymbol = `R$ ${state.totalPrice.raw}`;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
