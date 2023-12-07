import Logo from "../assets/img/logo.svg";
import MobileNav from "./MobileNav";
import NavBar from "./NavBar";
import SocialNav from "./SocialNav";

const Header = () => {
  return (
    <header className="bg-primary fixed w-full">
      <div className="container mx-auto py-5 flex justify-between items-center">
        <img src={Logo} alt="" />

        <MobileNav />
        <NavBar />
        <SocialNav />
      </div>
    </header>
  );
};

export default Header;
