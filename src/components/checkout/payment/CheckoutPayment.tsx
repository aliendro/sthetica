import { BaseSyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { StripeCardNumberElement, StripeError } from '@stripe/stripe-js';
import { useCheckout } from 'hooks';

const styles = {
  form: 'flex flex-col gap-3 m-5',
  title: 'col-span-2 text-center uppercase tracking-wider text-2xl',
  button: 'p-4 w-full col-span-2 font-light uppercase transition-all bg-opacity-90 lg:w-auto',
  input: 'col-span-2 border w-full text-sm',
  inputLabel: 'p-2 uppercase tracking-tighter',
  alert: 'bg-red-500 text-sm bg-opacity-40 rounded-sm text-center p-4 col-span-2',
};

const CheckoutPayment = () => {
  const [stripeError, setStripeError] = useState<StripeError>();
  const { updateOrderData, updatePaymentData } = useCheckout();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (event: BaseSyntheticEvent) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement) as StripeCardNumberElement,
    });

    if (!error) {
      updateOrderData(paymentMethod!.id);
      updatePaymentData(paymentMethod!);
      navigate('../review', { state: 'review', replace: true });
    } else {
      setStripeError(error);
    }
  };
  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-center ml-auto mr-auto">
        <form onSubmit={handleSubmit} className={styles.form}>
          <span className={styles.title}>payment</span>
          <div className={styles.input}>
            <span className={styles.inputLabel}>card</span>
            <CardNumberElement
              className="p-2"
              options={{
                placeholder: '4242 4242 4242 4242',
              }}
            />
          </div>
          <div className={styles.input}>
            <span className={styles.inputLabel}>expiry date</span>
            <CardExpiryElement
              className="p-2"
              options={{
                placeholder: '04/24',
              }}
            />
          </div>
          <div className={styles.input}>
            <span className={styles.inputLabel}>cvc</span>
            <CardCvcElement
              className="p-2"
              options={{
                placeholder: '424',
              }}
            />
          </div>
          {stripeError && <div className={styles.alert}>{stripeError.message}</div>}
          <button
            type="submit"
            disabled={!stripe}
            className={`${styles.button} bg-gray-900 text-white hover:opacity-90`}
          >
            continue
          </button>
          <button
            type="button"
            className={`${styles.button} hover:underline`}
            onClick={() => navigate('../shipping', { state: 'shipping', replace: true })}
          >
            back to shipping details
          </button>
        </form>
      </div>
    </section>
  );
};

export default CheckoutPayment;
