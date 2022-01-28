import { NavLink } from 'react-router-dom';

interface NavbarItemProps {
  to: string;
  label: string;
  onClose: () => void;
}

export default function NavbarMenuItem({ to, label, onClose }: NavbarItemProps) {
  return (
    <li className="flex w-full items-center justify-center p-4 transition-all">
      <button type="button" onClick={onClose}>
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
}
