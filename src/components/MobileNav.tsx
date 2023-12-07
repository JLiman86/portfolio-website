import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { navigation } from "../data";

import { Link } from "react-scroll";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <button onClick={() => setIsOpen(true)} className="cursor-pointer">
        <HiMenuAlt3 size={25} />
      </button>
      <div
        className={`${
          isOpen ? "w-full h-full" : "w-[0px] h-[0px]"
        }  fixed top-0 right-0   bg-accent transition-all duration-500 flex items-center justify-center overflow-hidden`}
      >
        <ul className="">
          {navigation.map((item, idx) => {
            return (
              <li className="text-center" key={idx}>
                <Link
                  className={`${
                    isOpen ? "text-white" : "text-accent"
                  } capitalize cursor-pointer p-3 transition-all duration-500`}
                  to={item.href}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setIsOpen(false)}
          className={`${
            isOpen ? "text-white" : "text-accent"
          }  absolute top-10 right-10 cursor-pointer transition-all duration-500`}
        >
          <IoCloseSharp size={25} />
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
