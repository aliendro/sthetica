import { useAppDispatch, useAppSelector } from 'app/store';
import { nextStep, prevStep } from 'components/checkout/checkoutSlice';

export default function useProgressBar() {
  const currentStep = useAppSelector((state) => state.checkout.currentStep);
  const dispatch = useAppDispatch();

  const next = () => dispatch(nextStep());
  const prev = () => dispatch(prevStep());

  return { currentStep, next, prev };
}
