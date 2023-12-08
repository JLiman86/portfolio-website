import { navigation } from "../data";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center justify-center text-sm gap-1">
        {navigation.map((item, idx) => {
          return (
            <li className="text-center" key={idx}>
              <Link
                smooth={true}
                duration={500}
                spy={true}
                offset={-69}
                activeClass="text-[rgb(172,107,52)]"
                className="hover:text-accent text-white capitalize cursor-pointer p-1"
                to={item.href}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
