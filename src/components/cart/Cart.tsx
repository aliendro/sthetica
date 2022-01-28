import { useNavigate, Link } from 'react-router-dom';
import { useCommerce } from 'hooks';
import CartItem from './CartItem';

export default function Cart() {
  const { cart, totalItems, totalPrice, clear } = useCommerce();
  const navigate = useNavigate();

  if (totalItems === 0) {
    return (
      <>
        <h1 className="p-10 text-center">
          Your cart is currently empty. Try looking for some products.
        </h1>
        <div className="grid w-full place-items-center gap-10">
          <Link to="/">
            <button type="button" className="button ">
              Back to Shop
            </button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <h1 className="title">shopping cart</h1>
      <div className="flex max-w-[120rem] flex-col items-center justify-center gap-5">
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
        <div className="self-end">
          <span className="text-lg font-bold uppercase">subtotal</span>
          <span className="pl-5 text-2xl">{totalPrice?.formatted_with_symbol}</span>
        </div>
        <button type="button" className="button" onClick={() => navigate('../checkout')}>
          proceed to checkout
        </button>
        <button
          type="button"
          onClick={clear}
          className="button bg-transparent text-black hover:underline"
        >
          clear my cart
        </button>
      </div>
    </>
  );
}
