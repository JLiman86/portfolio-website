import { navigation } from "../data";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center justify-center text-sm gap-1">
        {navigation.map((item, idx) => {
          return (
            <li className="text-center" key={idx}>
              <Link activeClass="text-accent" className="hover:text-accent  capitalize cursor-pointer p-1" to={item.href}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
