type Props = {
  step: number;
  name: string;
  isActive: boolean;
};

const CheckoutProgressBarItem = ({ step, name, isActive }: Props) => {
  const stepStyles = 'transition-all p-1 rounded-full w-7 h-7 text-xs grid place-items-center z-10';
  const nameStyles = 'transition-colors text-xs capitalize';
  const isStepActive = isActive ? `${stepStyles} bg-green-500` : `${stepStyles} bg-gray-300`;
  const isTextActive = isActive ? `${nameStyles} text-green-500` : `${nameStyles} text-black`;
  return (
    <li className="grid place-items-center gap-2">
      <span className={isStepActive}>{step}</span>
      <span className={isTextActive}>{name}</span>
    </li>
  );
};

export default CheckoutProgressBarItem;
