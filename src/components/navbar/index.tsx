import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <nav className="flex items-center text-2xl font-light tracking-wider text-black uppercase h-72">
      <ul className="flex flex-wrap items-center justify-center w-full h-full">
        <li className="flex justify-center w-full">
          <img src="/src/assets/arte.webp" alt="logo" width="200px" />
        </li>
        <li className="flex items-center p-4 transition-all hover:text-indigo-500">
          <Link to="/home">home</Link>
        </li>
        <li className="flex items-center p-4 transition-all hover:text-indigo-500">
          <Link to="/shop">shop</Link>
        </li>
        <li className="flex items-center p-4 transition-all hover:text-indigo-500">
          <Link to="/about">about</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
