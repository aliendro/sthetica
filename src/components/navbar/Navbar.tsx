import { useState } from 'react';
import { useCommerce } from 'hooks';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, MenuIcon, CloseIcon, eyes } from 'assets';
import NavbarMenuItem from './NavbarMenuItem';

const styles = {
  nav: 'flex text-2xl font-light tracking-tighter uppercase h-auto bg-white lg:top-0',
  ul: 'grid grid-cols-3 place-items-center w-full mx-auto h-full',
  logo: 'h-48',
  menuItem: 'flex items-center p-4 transition-all justify-center',
  cart: 'grid place-items-center absolute translate-x-6 -translate-y-12 w-5 h-5 bg-red-500 rounded-full',
  cartText: 'text-sm text-white font-bold',
  icon: 'h-10 w-10',
};

const url = {
  home: '/',
  cart: '/cart',
  contact: '/contact',
};

export default function Navbar() {
  const { totalItems } = useCommerce();
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const open = () => {
    setTimeout(() => {
      setMenuOpen(true);
    }, 75);
  };

  const close = () => {
    setTimeout(() => {
      setMenuOpen(false);
    }, 75);
  };

  return (
    <header className="">
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className="mr-auto grid">
            <button type="button" onClick={open}>
              <MenuIcon className={styles.icon} />
            </button>
          </li>
          <li>
            <Link className="flex flex-col items-center justify-center gap-1" to={url.home}>
              <img className="aspect-square h-24 w-24 md:h-36 md:w-36" src={eyes} alt="logo" />
              <div className="text-2xl tracking-wider">𝖘𝖙𝖍𝖊𝖙𝖎𝖈𝖆</div>
            </Link>
          </li>
          <li className="ml-auto grid pr-2">
            <Link to={url.cart}>
              <ShoppingCartIcon className="h-9 w-9" />
              {totalItems > 0 && (
                <div className={styles.cart}>
                  <span className={styles.cartText}>{totalItems}</span>
                </div>
              )}
            </Link>
          </li>
        </ul>
        <ul
          onMouseLeave={close}
          onWheel={close}
          className={`fixed top-0 left-0 z-10 flex h-full w-full transform flex-col items-center justify-center bg-black bg-opacity-95 text-white opacity-100 transition-all duration-300 md:w-1/3 ${
            isMenuOpen ? 'transform-none' : '-translate-x-full'
          }`}
        >
          <li>
            <button type="button" onClick={close}>
              <CloseIcon className={`${styles.icon} absolute top-10 left-10`} />
            </button>
          </li>
          <NavbarMenuItem to={url.home} label="products" onClose={close} />
          <NavbarMenuItem to={url.cart} label="cart" onClose={close} />
        </ul>
      </nav>
    </header>
  );
}
