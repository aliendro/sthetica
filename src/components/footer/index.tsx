// Icons
import { ReactComponent as Instagram } from 'assets/icons/instagram.svg';
import { ReactComponent as Youtube } from 'assets/icons/youtube.svg';

const Footer = () => (
  <footer className="flex flex-wrap items-center justify-center h-20 p-16 ">
    <ul className="flex items-center justify-center w-full h-10">
      <li className="pr-4">
        <a href="https://www.instagram.com/sthetica" className="p-4">
          <Instagram className="transition-all h-9 hover:text-red-500" />
        </a>
      </li>
      <li className="">
        <a href="https://www.youtube.com" className="p-4">
          <Youtube className="transition-all h-9 hover:text-red-500" />
        </a>
      </li>
    </ul>
    <ul className="flex items-center justify-center h-10">
      <li>
        <span className="p-4 text-xs ">
          <a href="https://www.github.com/aliendro" className="text-gray-500 hover:text-red-500">
            made by aliendro 2021
          </a>
        </span>
      </li>
    </ul>
  </footer>
);

export default Footer;
