// Redux store
import { useAppDispatch, useAppSelector } from 'app/store';

// Cart actions
import { addToCart, removeFromCart } from 'components/cart/cartSlice';

const useCart = () => {
  const dispatch = useAppDispatch();
  const { cart, totalItems, subtotal } = useAppSelector((state) => state.cart);

  const add = (p: Product) => dispatch(addToCart(p));
  const remove = (p: Product) => dispatch(removeFromCart(p));

  return { cart, totalItems, subtotal, add, remove };
};

export default useCart;
