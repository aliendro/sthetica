import { NavLink } from 'react-router-dom';

type NavbarItemProps = {
  to: string;
  label: string;
  onClick: () => void;
};

const styles = {
  menuItem: 'flex items-center p-4 transition-all w-full justify-center',
};

const NavbarMenuItem = ({ to, label, onClick }: NavbarItemProps) => (
  <li className={styles.menuItem}>
    <button type="button" onClick={onClick}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? 'text-red-500' : 'hover:underline hover:decoration-red-500'
        }
      >
        {label}
      </NavLink>
    </button>
  </li>
);

export default NavbarMenuItem;
