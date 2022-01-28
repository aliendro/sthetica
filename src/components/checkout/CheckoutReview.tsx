import { useCheckout, useCommerce } from 'hooks';
import useProgressBar from 'hooks/useProgressBar';

export default function CheckoutReview() {
  const { next: nextStep, prev: prevStep } = useProgressBar();
  const { formState, orderState, paymentState } = useCheckout();
  const { totalPrice } = useCommerce();

  return (
    <div className="form gap-5">
      <h1 className="title p-5">order details</h1>
      <div className="grid w-full grid-cols-3">
        <span className="place-self-start text-xs uppercase tracking-wider">name</span>
        <span className="place-self-center text-xs uppercase tracking-wider">quantity</span>
        <span className="place-self-end text-xs uppercase tracking-wider">price</span>
      </div>
      <div className="grid w-full gap-3">
        {orderState.line_items.map((product: LineItem) => (
          <div className="grid grid-cols-3" key={product.id}>
            <span>{product.name}</span>
            <span className="place-self-center">{product.quantity}</span>
            <span className="place-self-end">{product.price.formatted_with_symbol}</span>
          </div>
        ))}
      </div>
      <div className="w-full text-right align-baseline">
        <span className="text-md pr-4">Subtotal: </span>
        <span className="text-lg font-bold">{totalPrice.formatted_with_symbol}</span>
      </div>
      <h1 className="title p-5">shipping details</h1>
      <section className="flex w-full flex-col items-center text-left">
        <div className="w-full">{`${formState.firstName} ${formState.lastName}`}</div>
        <div className="w-full">{formState.email}</div>
        <div className="w-full">{formState.address}</div>
        <div className="w-full">{`${formState.city}, ${formState.state}, ${formState.postalCode}`}</div>
        <div className="w-full">{formState.country}</div>
      </section>
      <h1 className="title p-5">payment details</h1>
      <section className="flex w-full flex-col items-center text-left">
        <div className="w-full capitalize tracking-tighter">{`${paymentState.card?.brand} ending ${paymentState.card?.last4}`}</div>
        <div className="w-full">{`Expiry date: ${paymentState.card?.exp_month}/${paymentState.card?.exp_year}`}</div>
      </section>
      <div className="flex w-full flex-col items-center justify-center gap-5 py-5">
        <button type="button" onClick={nextStep} className="button">
          place order
        </button>
        <button
          type="button"
          className="button bg-transparent text-black hover:underline"
          onClick={prevStep}
        >
          back to payment
        </button>
      </div>
    </div>
  );
}
