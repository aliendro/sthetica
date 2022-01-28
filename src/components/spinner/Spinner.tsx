import './spinner.css';

export default function Spinner() {
  return (
    <div className="loader title flex items-center justify-center gap-1 rounded-full">
      <div className="h-5 w-5 animate-pulse rounded-full bg-black" />
      <div className="h-5 w-5 animate-pulse rounded-full bg-black" />
      <div className="h-5 w-5 animate-pulse rounded-full bg-black" />
    </div>
  );
}
