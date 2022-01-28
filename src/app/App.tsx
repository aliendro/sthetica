import Navbar from 'components/navbar/Navbar';
import { Outlet, useOutlet } from 'react-router-dom';
import Shop from 'components/shop/Shop';
import { useEffect } from 'react';

export default function App() {
  const hasChild = useOutlet();
  useEffect(() => {
    document.body.style.overflowY = 'scroll';
  }, []);
  return (
    <main className="flex flex-col p-5 md:mx-20 md:p-10 lg:mx-40 xl:mx-80 2xl:mx-[25rem]">
      <Navbar />
      <section className="grid gap-5 md:p-0">
        <section>{hasChild ? <Outlet /> : <Shop />}</section>
      </section>
    </main>
  );
}
