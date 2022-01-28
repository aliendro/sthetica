import { useCommerce } from 'hooks';

interface ShopItemProps {
  data: Product;
}

export default function ShopItem({ data }: ShopItemProps) {
  const { add, isLoading } = useCommerce();
  const {
    image,
    name,
    price: { formatted_with_symbol: formattedWithSymbol },
  } = data;

  return (
    <div className="flex w-full flex-col">
      <div className="w-full lg:hidden">
        <span className="text-lg ">{name}</span>
      </div>
      <div className="group relative transition-all">
        <div className="absolute grid h-full w-full place-items-center bg-black bg-opacity-60 text-2xl font-bold text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
          <span>{name}</span>
        </div>
        <div
          aria-label="product image"
          style={{ backgroundImage: `url('${image?.url}')` }}
          className="h-64 w-full bg-cover bg-center"
        />
      </div>
      <div className="flex items-center pt-2">
        <button
          type="button"
          className="button w-32 capitalize"
          onClick={() => add(data)}
          disabled={isLoading}
        >
          {isLoading ? 'Adding...' : 'Add to cart'}
        </button>
        <span className="ml-auto items-baseline text-xl font-bold text-black">
          {formattedWithSymbol}
        </span>
      </div>
    </div>
  );
}
