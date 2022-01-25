import { Outlet, useOutlet } from 'react-router-dom';
import { useGetProductListQuery } from 'services/chec';
import { ShopItem } from 'components/shop';
import Spinner from 'components/spinner';

const Shop = () => {
  const { data, isFetching } = useGetProductListQuery();
  const hasChild = useOutlet();

  if (hasChild) return <Outlet />;

  return !isFetching ? (
    <div className="flex flex-wrap justify-center m-4">
      <div className="md:grid md:grid-cols-2 md:place-items-center md:ml-auto md:mr-auto gap-20 lg:grid-cols-3 xl:grid-cols-4">
        {data!.map((product) => (
          <ShopItem key={product.id} data={product} />
        ))}
        {data!.map((product) => (
          <ShopItem key={product.id} data={product} />
        ))}
        {data!.map((product) => (
          <ShopItem key={product.id} data={product} />
        ))}
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default Shop;
