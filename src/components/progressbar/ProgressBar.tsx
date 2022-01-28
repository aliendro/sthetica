import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  currentStep: number;
}

export default function ProgressBar({ currentStep }: ProgressBarProps) {
  const steps = ['Shipping', 'Payment', 'Review', 'Finish'];
  return (
    <div className="my-10 w-[300px]">
      <ul className={styles.bar}>
        {steps.map((step, idx) => (
          <li key={step} className={currentStep >= idx ? styles.active : ''}>
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
}
