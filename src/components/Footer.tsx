import { social } from "../data";
import { Link } from "react-scroll";
import Person from '../assets/img/logo.svg'

const Footer = () => {
  return (
    <footer className="bg-primary ">
      <div className="py-7 container mx-auto flex items-center justify-center md:justify-between">
        <ul className="md:flex items-center justify-center text-sm gap-3 hidden ">
          {social.map((item, idx) => {
            return (
              <li
                className="text-center text-accent flex items-center"
                key={idx}
              >
                <Link className="capitalize cursor-pointer p-1 " to={item.href}>
                  {item.icon}
                </Link>
              </li>
            );
          })}
        </ul>

        <img className="hidden md:block" src={Person} alt="" />
        <p className="text-paragraph text-sm">&copy; 2023 Sillicon Valley. All rights reserved.</p>
      </div> 
    </footer>
  );
};

export default Footer;
