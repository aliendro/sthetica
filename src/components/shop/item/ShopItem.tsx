import { useCommerce } from 'hooks';

type ShopItemProps = {
  data: Product;
};

const ShopItem = ({ data }: ShopItemProps) => {
  const { add, isLoading } = useCommerce();
  const {
    image,
    name,
    price: { formatted_with_symbol: formattedWithSymbol },
  } = data;

  return (
    <div className="pb-10">
      <div className="w-full lg:hidden">
        <span className="text-lg ">{name}</span>
      </div>
      <div className="relative transition-all group">
        <div className="absolute grid w-full h-full text-2xl font-bold text-white transition-all duration-300 bg-black opacity-0 place-items-center bg-opacity-60 group-hover:opacity-100">
          <span>{name}</span>
        </div>
        <img src={image?.url} alt={name} className="w-72" />
      </div>
      <div className="flex items-center pt-2">
        <button
          type="button"
          className="p-4 w-36 text-white transition-color duration-300 bg-gray-900 border-0 outline-none hover:bg-opacity-80 disabled:opacity-80"
          onClick={() => add(data)}
          disabled={isLoading}
        >
          {isLoading ? 'Adding...' : 'Add to cart'}
        </button>
        <span className="items-baseline ml-auto text-xl font-bold text-black">
          {formattedWithSymbol}
        </span>
      </div>
    </div>
  );
};

export default ShopItem;
