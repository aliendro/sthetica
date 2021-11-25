// Redux store
import { useAppDispatch, useAppSelector } from 'app/store';

// Cart actions
import { addToCart, removeFromCart } from 'components/cart/cartSlice';

/**
 *
 * @param arr: Product list to parse.
 * @returns Object in { key: value } format containing every product and its respective amount in cart.
 */

const getAmountByItem = (arr: Product[]) =>
  arr.reduce((products, current) => {
    if (current.id in products) {
      products[current.id] += 1;
    } else {
      products[current.id] = 1;
    }
    return products;
  }, {} as { [key: string]: number });

const useCart = () => {
  const dispatch = useAppDispatch();
  const { amount, totalPrice, cart } = useAppSelector((state) => state.cart);

  const productList = [...new Set(cart)];
  const amountByItem = getAmountByItem(cart);

  const add = (p: Product) => dispatch(addToCart(p));
  const remove = (p: Product) => dispatch(removeFromCart(p));

  return { amount, totalPrice, productList, amountByItem, add, remove };
};

export default useCart;
