import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { checApi } from 'services/chec';
import checkoutReducer from 'components/checkout/checkoutSlice';

const store = configureStore({
  reducer: {
    [checApi.reducerPath]: checApi.reducer,
    checkout: checkoutReducer,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(checApi.middleware),
  devTools: import.meta.env.MODE !== 'production',
});

setupListeners(store.dispatch);

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

export default store;
