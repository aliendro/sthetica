import { useNavigate, Link } from 'react-router-dom';
import { useCommerce } from 'hooks';
import CartItem from './item/CartItem';

const styles = {
  section: 'flex flex-col m-4 lg:m-10',
  title: 'flex items-center justify-center mb-10 text-center uppercase tracking-wider text-2xl',
  wrapper: 'grid place-items-center gap-7 ml-auto mr-auto',
  button: 'w-full max-w-2xl p-4 font-light uppercase transition-colors lg:hover:bg-opacity-80',
};

const Cart = () => {
  const { cart, totalItems, totalPrice, clear } = useCommerce();
  const navigate = useNavigate();

  return totalItems > 0 ? (
    <section className={styles.section}>
      <h1 className={styles.title}>shopping cart</h1>
      <div className={styles.wrapper}>
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
        <div className="justify-self-end">
          <span className="text-lg font-bold uppercase">subtotal</span>
          <span className="pl-5 text-2xl">{totalPrice?.formatted_with_symbol}</span>
        </div>
        <button
          type="button"
          className={`${styles.button} bg-gray-900 text-white`}
          onClick={() => navigate('../checkout/shipping', { state: 'shipping', replace: true })}
        >
          proceed to checkout
        </button>
        <button type="button" onClick={clear} className={`${styles.button} hover:underline`}>
          <span className="drop-shadow-lg">Clear my cart</span>
        </button>
      </div>
    </section>
  ) : (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div>Your cart is currently empty. Try looking for some products.</div>
        <Link to="/">
          <button
            type="button"
            className="p-4 text-base bg-gray-900 text-white hover:bg-opacity-80"
          >
            Back to Shop
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Cart;
