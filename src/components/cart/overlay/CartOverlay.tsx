// Cart custom hook
import { useCart } from 'hooks';

// Router
import { Link, useMatch } from 'react-router-dom';

// Icon
import { ReactComponent as ShoppingCartIcon } from 'assets/icons/shoppingcart.svg';

const CartOverlay = () => {
  const { totalItems, subtotal } = useCart();
  const items = totalItems > 1 ? `${totalItems} items` : `${totalItems} item`;
  const isCheckout = !useMatch('/shop/cart');

  return (
    <div
      className={
        totalItems > 0 && isCheckout
          ? 'visible opacity-100 transition-all'
          : 'invisible opacity-0 transition-all'
      }
    >
      <Link
        to="/shop/cart"
        className="fixed bottom-0 right-0 flex items-center w-full max-w-md p-4 text-gray-400 bg-black h-14 bg-opacity-95 group"
      >
        <ShoppingCartIcon className="w-5 grou-hover:text-gray-200 transition-all" />
        <div className="mr-auto flex justify-center items-center font-extralight ml-4 group-hover:text-gray-200 transition-all">
          {items}
        </div>
        <div className="font-extralight group-hover:text-gray-200 transition-all">
          {subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </div>
      </Link>
    </div>
  );
};

export default CartOverlay;
