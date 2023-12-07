
import {social} from '../data'

import {Link} from 'react-scroll'

const SocialNav = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center justify-center text-sm gap-3">
        {social.map((item, idx) => {
          return (
            <li className="text-center text-accent flex items-center" key={idx}>
              <Link className="capitalize cursor-pointer p-1 " to={item.href}>
                {item.icon}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SocialNav;
