import { LineItem } from '@chec/commerce.js/types/line-item';
import { CloseIcon } from 'assets';
import { useCommerce } from 'hooks';

type CartItemProps = {
  product: LineItem;
};

const CartItem = ({ product }: CartItemProps) => {
  const { update, isLoading, isFetching } = useCommerce();

  return (
    <div key={product.id} className="flex border">
      <div className="flex items-center">
        <img src={product.image?.url} alt="item" loading="lazy" className="w-52 lg:w-72" />
      </div>

      <div className="flex flex-col justify-between w-full pl-2 lg:pl-6">
        <div className="flex items-center text-lg">
          <span>{product.name}</span>
          <button
            type="button"
            className="ml-auto transition-colors text-gray-400 hover:text-red-400"
            onClick={() => update(product, 0)}
          >
            <CloseIcon className="h-4 w-4" />
          </button>
        </div>
        <div className="flex items-center">
          <select
            value={product.quantity}
            className="w-10 pl-2 flex items-center outline-none border border-gray-900 bg-gray-200"
            size={1}
            name="quantity"
            onChange={(event) => update(product, Number(event.target.value))}
            disabled={isLoading || isFetching}
          >
            {[...Array(6).keys()].map((idx) => (
              <option key={idx} value={idx + 1}>
                {idx + 1}
              </option>
            ))}
          </select>
          <span className="ml-auto text-lg lg:mr-2">{product.price.formatted_with_symbol}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
