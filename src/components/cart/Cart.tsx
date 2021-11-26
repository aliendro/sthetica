// Icons
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';
import { ReactComponent as MinusIcon } from 'assets/icons/minus.svg';
import useCart from 'hooks/useCart';

const Checkout = () => {
  const { cart, totalItems, subtotal, add, remove } = useCart();

  return totalItems > 0 ? (
    <main className="m-4 lg:m-20">
      <div className="p-4 uppercase tracking-widest font-bold text-3xl grid place-items-center">
        shopping cart
      </div>

      <hr />

      <div className="invisible lg:visible lg:mt-2 lg:grid lg:grid-cols-3 lg:place-items-center lg:uppercase lg:font-light lg:text-xs p-3">
        <span>product</span>
        <span>amount</span>
        <span>price</span>
      </div>

      <div className="pt-5 pb-5">
        {cart.map((product) => (
          <div key={product.id} className="product-list grid grid-cols-3 place-items-center p-3">
            <div>{product.name}</div>
            <div className="grid grid-cols-4 place-items-center">
              <button type="button" className="p-2" onClick={() => remove(product)}>
                <MinusIcon className="h-4 w-4 cursor-pointer transition-all lg:hover:text-red-500" />
              </button>
              <span className="col-span-2">{product.amount}</span>
              <button type="button" className="p-2" onClick={() => add(product)}>
                <PlusIcon className="h-4 w-4 transition-all lg:hover:text-indigo-500" />
              </button>
            </div>
            <div>
              {product.price.raw.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </div>
          </div>
        ))}
      </div>

      <hr />

      <div className="grid grid-cols-3 p-3 place-items-center">
        <div className="uppercase font-extralight col-start-2">total</div>
        <div className="">
          {subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </div>
      </div>
      <div className="w-full p-2 pt-6 pb-6 lg:grid lg:grid-cols-3 lg:place-items-center lg:w-auto">
        <button
          type="button"
          className="bg-indigo-500 w-full p-4 text-white  transition-all uppercase font-extralight lg:hover:bg-opacity-80 lg:col-start-3 lg:w-auto"
        >
          checkout
        </button>
      </div>
    </main>
  ) : (
    <div>nothing to show</div>
  );
};

export default Checkout;
