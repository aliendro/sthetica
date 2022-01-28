import { useGetCartQuery } from 'services/chec';
import { useLocalStorage } from 'hooks';

export default function useCart() {
  const KEY = import.meta.env.VITE_CARTID as string;
  const [cartId, sendToLocalStorage, clear] = useLocalStorage(KEY, '');
  const { data, isFetching } = useGetCartQuery();

  if (cartId === '' && !isFetching) sendToLocalStorage(data!.id);

  return { cartId, clear };
}
