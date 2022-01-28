import { lazy } from 'react';
import ProgressBar from 'components/progressbar/ProgressBar';
import useProgressBar from 'hooks/useProgressBar';

const Shipping = lazy(() => import('./CheckoutShipping'));
const Payment = lazy(() => import('./CheckoutPayment'));
const Review = lazy(() => import('./CheckoutReview'));
const Finish = lazy(() => import('./CheckoutFinish'));

export default function Checkout() {
  const { currentStep } = useProgressBar();

  return (
    <section className="flex flex-col items-center justify-center">
      <ProgressBar currentStep={currentStep} />
      {currentStep === 0 && <Shipping />}
      {currentStep === 1 && <Payment />}
      {currentStep === 2 && <Review />}
      {currentStep === 3 && <Finish />}
    </section>
  );
}
