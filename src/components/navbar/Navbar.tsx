import { useCommerce } from 'hooks';

// React router
import { Link } from 'react-router-dom';

// Icons
import { ShoppingCartIcon, MenuIcon, CloseIcon, eyes } from 'assets';

// Components
import { useMenu } from 'context/MenuContext';
import NavbarMenuItem from './NavbarMenuItem';

const styles = {
  nav: 'flex text-2xl font-light tracking-tighter uppercase h-auto bg-white lg:top-0',
  ul: 'grid grid-cols-3 place-items-center w-full mx-auto',
  logo: 'h-48',
  menu: 'fixed flex transform duration-500 bg-opacity-95 flex-col justify-center items-center transition-all top-0 w-80 h-full bg-black text-white z-10 opacity-100 text-white',
  menuItem: 'flex items-center p-4 transition-all w-full justify-center',
  cart: 'grid place-items-center absolute transform translate-x-6 -translate-y-12 w-5 h-5 bg-red-500 rounded-full',
  cartText: 'text-sm text-white font-bold',
  icon: 'h-10 w-10',
};

export default function Navbar() {
  const { totalItems } = useCommerce();
  const { style, open, close } = useMenu();

  return (
    <header className="">
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className="grid">
            <button type="button" onClick={open}>
              <MenuIcon className={styles.icon} />
            </button>
          </li>
          <li className="w-40 h-40">
            <Link to="/">
              <img src={eyes} alt="logo" />
            </Link>
          </li>
          <li className="grid">
            <Link to="/shop/cart">
              <ShoppingCartIcon className="w-9 h-9" />
              {totalItems > 0 && (
                <div className={styles.cart}>
                  <span className={styles.cartText}>{totalItems}</span>
                </div>
              )}
            </Link>
          </li>
        </ul>
        <ul className={style}>
          <li>
            <button type="button" onClick={close}>
              <CloseIcon className={`${styles.icon} absolute top-10 left-10`} />
            </button>
          </li>
          <NavbarMenuItem to="/" label="shop" onClick={close} />
          <NavbarMenuItem to="/about" label="about" onClick={close} />
          <NavbarMenuItem to="/error" label="contact" onClick={close} />
        </ul>
      </nav>
    </header>
  );
}
