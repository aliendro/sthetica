import './spinner.css';

type Props = {
  color?: string;
};

const Spinner = ({ color }: Props) => {
  const circleStyles = 'w-4 h-4 rounded-full animate-pulse';
  const circleClass = `${circleStyles} ${color}`;
  return (
    <div className="loader rounded-full flex items-center justify-center gap-1">
      <div className={circleClass} />
      <div className={circleClass} />
      <div className={circleClass} />
    </div>
  );
};

Spinner.defaultProps = {
  color: 'bg-black',
};

export default Spinner;
