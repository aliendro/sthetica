import { useState } from 'react';

type Props = {
  currentStep: number;
};

const CheckoutProgressBarLine = ({ currentStep }: Props) => {
  const [className, setClassName] = useState<string>('');
  const lineStyles = 'transition-all absolute transform -translate-y-3 translate-x-1 h-0.5 w-44 ';
  switch (currentStep) {
    case 2: {
      const newClassName = `${lineStyles} bg-gradient-to-r from-green-500 via-gray-300 to-gray-300`;
      if (className !== newClassName) setClassName(newClassName);
      break;
    }
    case 3: {
      const newClassName = `${lineStyles} bg-green-500`;
      if (className !== newClassName) setClassName(newClassName);
      break;
    }
    default: {
      const newClassName = `${lineStyles} bg-gray-300`;
      if (className !== newClassName) setClassName(newClassName);
      break;
    }
  }
  return <div className={className} />;
};

export default CheckoutProgressBarLine;
