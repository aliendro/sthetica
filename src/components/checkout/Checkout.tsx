import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import CheckoutProgressBar from './progressbar/CheckoutProgressBar';

type Step = {
  state: 'shipping' | 'payment' | 'review';
};

const Checkout = () => {
  enum Steps {
    shipping = 1,
    payment,
    review,
  }
  const location = useLocation();
  const state = location.state as Step;
  const navigate = useNavigate();

  useEffect(() => {
    if (state === null) {
      navigate('../cart');
    }
  }, [state]);

  const currentStep = Steps[state];

  return (
    <section className="flex flex-col">
      <CheckoutProgressBar currentStep={currentStep} />
      <Outlet />
    </section>
  );
};

export default Checkout;
