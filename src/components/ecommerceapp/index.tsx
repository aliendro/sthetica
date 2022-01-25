import Navbar from 'components/navbar';
import { Outlet, useOutlet } from 'react-router-dom';
import Shop from 'components/shop';
import { useMenu } from 'context/MenuContext';

export default function EcommerceApp() {
  const hasChild = useOutlet();
  const { close } = useMenu();
  return (
    <main onWheel={close} onTouchStart={close} className="flex flex-col">
      <Navbar />
      <section>{hasChild ? <Outlet /> : <Shop />}</section>
    </main>
  );
}
