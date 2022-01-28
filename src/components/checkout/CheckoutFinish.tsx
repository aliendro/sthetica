import { useCheckout } from 'hooks';
import { useEffect } from 'react';
import Spinner from 'components/spinner/Spinner';

export default function CheckoutFinish() {
  const { order, isCapturing, refetch, checkoutResponse } = useCheckout();

  useEffect(() => {
    order();
    refetch();
  }, []);

  if (isCapturing) return <Spinner />;

  return (
    <div className="form">
      <div>
        <span>The order </span>
        <span className="text-lg font-extrabold">
          {checkoutResponse?.checkout_token_id.slice(5)}
        </span>
        <span> was successful! Check the details on your email.</span>
      </div>
      <div className="py-10">
        <a href="/">
          <button type="button" className="button">
            Back to home
          </button>
        </a>
      </div>
    </div>
  );
}
