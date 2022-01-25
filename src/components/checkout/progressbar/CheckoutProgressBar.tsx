import CheckoutProgressBarItem from './CheckoutProgressBarItem';
import CheckoutProgressBarLine from './CheckoutProgressBarLine';

type Props = {
  currentStep: number;
};

const CheckoutProgressBar = ({ currentStep }: Props) => (
  <ul className="flex justify-center items-center gap-10 mb-6">
    <CheckoutProgressBarItem step={1} name="shipping" isActive={currentStep > 0} />
    <CheckoutProgressBarItem step={2} name="payment" isActive={currentStep > 1} />
    <CheckoutProgressBarItem step={3} name="review" isActive={currentStep > 2} />
    <CheckoutProgressBarLine currentStep={currentStep} />
  </ul>
);

export default CheckoutProgressBar;
