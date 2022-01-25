import { useCheckout } from 'hooks';
import { useNavigate } from 'react-router-dom';

const styles = {
  title: 'col-span-3 m-10 text-center uppercase tracking-wider text-2xl',
  section: 'grid place-items-center mr-auto ml-auto border w-full',
  card: 'h-12 w-12',
  cartColumn: 'text-xs uppercase tracking-wider place-self-center',
  buttonContainer: 'flex flex-col gap-3',
  button: 'p-4 w-full col-span-2 font-light uppercase transition-all bg-opacity-90 lg:w-auto',
};

const CheckoutReview = () => {
  const navigate = useNavigate();
  const { formState, orderState, paymentState, order } = useCheckout();

  return (
    <div className="flex flex-col ml-auto mr-auto md:gap-5 lg:gap-10">
      <section className={styles.section}>
        <h1 className={`${styles.title} col-span-3`}>order details</h1>
        <span className={styles.cartColumn}>name</span>
        <span className={styles.cartColumn}>quantity</span>
        <span className={styles.cartColumn}>price</span>
        {orderState.line_items.map((product: LineItem) => (
          <div
            className="mt-5 grid grid-cols-3 gap-5 col-span-3 place-items-center"
            key={product.id}
          >
            <span>{product.name}</span>
            <span>{product.quantity}</span>
            <span>{product.price.formatted_with_symbol}</span>
          </div>
        ))}
      </section>
      <section className="flex flex-col">
        <h1 className={styles.title}>shipping details</h1>
        <div className="flex flex-col gap-1">
          <span>{`${formState.firstName} ${formState.lastName}`}</span>
          <span>{formState.email}</span>
          <span>{formState.address}</span>
          <span>{`${formState.city}, ${formState.state}, ${formState.postalCode}`}</span>
          <span>{formState.country}</span>
        </div>
      </section>
      <section className="flex flex-col">
        <h1 className={styles.title}>payment details</h1>
        <span className="capitalize tracking-tighter">{`${paymentState.card?.brand} ending ${paymentState.card?.last4}`}</span>
        <span>{`Expiry date: ${paymentState.card?.exp_month}/${paymentState.card?.exp_year}`}</span>
      </section>
      <div className={styles.buttonContainer}>
        <button
          type="button"
          onClick={() => order()}
          className={`${styles.button} bg-gray-900 text-white hover:opacity-90`}
        >
          place order
        </button>
        <button
          type="button"
          className={`${styles.button} hover:underline`}
          onClick={() => navigate('../payment', { state: 'payment', replace: true })}
        >
          back to payment
        </button>
      </div>
    </div>
  );
};

export default CheckoutReview;
