type Props = {
  placeholder: string;
};

const Button = ({ placeholder }: Props) => {
  const style = '';
  return (
    <button type="button" className={style}>
      {placeholder}
    </button>
  );
};

export default Button;
