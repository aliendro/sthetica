import {
  useAddToCartMutation,
  useEmptyCartMutation,
  useGetCartByIdQuery,
  useUpdateCartMutation,
} from 'services/chec';
import { useCart } from 'hooks';

export default function useCommerce() {
  const { cartId } = useCart();
  const { data, isFetching, refetch } = useGetCartByIdQuery(cartId);
  const [addItemToCart, { isLoading: isAdding }] = useAddToCartMutation();
  const [updateCart, { isLoading: isUpdating }] = useUpdateCartMutation();
  const [emptyCart, { isLoading: isClearing }] = useEmptyCartMutation();

  const add = (product: Product | LineItem) => {
    addItemToCart({ cartId, product });
  };

  const update = (product: LineItem, quantity: number) => {
    updateCart({ cartId, product, quantity });
  };

  const clear = () => {
    emptyCart(cartId);
  };

  return {
    cart: data?.line_items ?? [],
    totalItems: data?.total_items ?? 0,
    totalPrice: data?.subtotal ?? ({} as Price),
    isLoading: isAdding || isUpdating || isClearing,
    isFetching,
    add,
    update,
    clear,
    refetch,
  };
}
