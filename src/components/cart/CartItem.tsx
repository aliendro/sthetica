import { useCommerce } from 'hooks';

interface CartItemProps {
  product: LineItem;
}

export default function CartItem({ product }: CartItemProps) {
  const { update, isLoading, isFetching } = useCommerce();
  return (
    <div aria-label="wrapper" className="flex w-full gap-2 border">
      <img src={product.image?.url} alt="product" loading="lazy" className="h-40 w-40" />
      <div
        aria-label="product information"
        className="text-start flex w-full flex-col justify-around gap-5"
      >
        <h1 aria-label="title" className="text-xl font-bold tracking-wide md:text-2xl">
          {product.name}
        </h1>
        <div aria-label="quantity" className="flex items-center">
          <span className="mr-2 text-sm md:text-lg">Quantity:</span>
          <select
            value={product.quantity}
            className="rounded-lg border border-black bg-transparent p-1 text-sm"
            size={1}
            onChange={(event) => update(product, Number(event.target.value))}
            disabled={isLoading || isFetching}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
        </div>
        <button
          type="button"
          className="mr-auto text-sm transition-colors duration-150 hover:text-red-600"
          onClick={() => update(product, 0)}
        >
          Remove from cart
        </button>
        <h1 aria-label="price" className="ml-auto text-lg font-bold md:text-xl">
          {product.price.formatted_with_symbol}
        </h1>
      </div>
    </div>
  );
}
