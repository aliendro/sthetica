import { createSlice } from '@reduxjs/toolkit';
import { PaymentMethod } from '@stripe/stripe-js';

const initialState = {
  currentStep: 0,
  form: {
    country: 'BR',
  } as CheckoutState,
  order: {} as CheckoutCapture,
  payment: {} as PaymentMethod,
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    updateForm: (state, action: { type: string; payload: CheckoutState }) => {
      state.form = action.payload;
    },
    updateOrder: (state, action: { type: string; payload: CheckoutCapture }) => {
      state.order = action.payload;
    },
    updatePayment: (state, action: { type: string; payload: PaymentMethod }) => {
      state.payment = action.payload;
    },
    nextStep: (state) => {
      state.currentStep += 1;
    },
    prevStep: (state) => {
      state.currentStep -= 1;
    },
  },
});

export const { updateForm, updateOrder, updatePayment, nextStep, prevStep } = checkoutSlice.actions;

export default checkoutSlice.reducer;
