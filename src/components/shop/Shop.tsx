import { useGetProductListQuery } from 'services/chec';
import ShopItem from 'components/shop/ShopItem';
import Spinner from 'components/spinner/Spinner';

export default function Shop() {
  const { data, isFetching } = useGetProductListQuery();

  return !isFetching ? (
    <>
      <h1 className="title">shop</h1>
      <div className="flex flex-col place-items-center items-center gap-20 md:grid md:grid-cols-2 2xl:grid-cols-3">
        {data!.map((product) => (
          <ShopItem key={product.id} data={product} />
        ))}
      </div>
    </>
  ) : (
    <Spinner />
  );
}
