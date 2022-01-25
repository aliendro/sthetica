import { useGetCartQuery } from 'services/chec';
import { useLocalStorage } from 'hooks';

const useCart = () => {
  const KEY = import.meta.env.VITE_CARTID as string;
  const [cartId, sendToLocalStorage] = useLocalStorage(KEY, '');
  const { data, isFetching } = useGetCartQuery();

  if (cartId === '' && !isFetching) sendToLocalStorage(data!.id);

  const refreshCart = () => {
    sendToLocalStorage('');
  };

  return { cartId, refreshCart };
};

export default useCart;
