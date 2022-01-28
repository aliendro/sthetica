import { BaseSyntheticEvent, useState } from 'react';
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { StripeCardNumberElement, StripeError } from '@stripe/stripe-js';
import { useCheckout } from 'hooks';
import useProgressBar from 'hooks/useProgressBar';

export default function CheckoutPayment() {
  const { next: nextStep, prev: prevStep } = useProgressBar();
  const [stripeError, setStripeError] = useState<StripeError>();
  const { updateOrderData, updatePaymentData } = useCheckout();

  const [alert, setAlert] = useState<boolean>(false);

  const stripe = useStripe();
  const elements = useElements();

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
      nextStep();
    } else {
      setStripeError(error);
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 7000);
    }
  };

  return (
    <>
      <h1 className="title">payment</h1>
      <form onSubmit={handleSubmit} className="form">
        <CardNumberElement
          options={{
            classes: {
              base: 'border-2 w-full md:w-80 p-2 outline-none transition-all duration-200',
              focus: 'ring-2 ring-green-400',
            },
            placeholder: '4242 4242 4242 4242',
          }}
        />
        <CardExpiryElement
          options={{
            classes: {
              base: 'border-2 w-full md:w-80 p-2 outline-none transition-all duration-200',
              focus: 'ring-2 ring-green-400',
            },
            placeholder: 'Any future date: mm/yy',
          }}
        />
        <CardCvcElement
          options={{
            classes: {
              base: 'border-2 w-full md:w-80 p-2 outline-none transition-all duration-200',
              focus: 'ring-2 ring-green-400',
            },
            placeholder: 'Any: 000',
          }}
        />
        <div
          className={`mb-5 w-full bg-red-500 bg-opacity-40 p-3 text-center text-sm transition-all duration-500 md:w-80 ${
            alert ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {stripeError?.message}
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <button type="submit" disabled={!stripe} className="button">
            continue
          </button>
          <button
            type="button"
            className="button bg-transparent text-black hover:underline"
            onClick={prevStep}
          >
            back to shipping details
          </button>
        </div>
      </form>
    </>
  );
}
