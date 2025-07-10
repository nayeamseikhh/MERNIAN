import { Link } from "react-router";
import logo from "../../assets/logo/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import IconsRightPart from "./iconsRightPart/IconsRightPart";

const Header = () => {
  return (
    <div className="bg-purple01 py-5 px-6">
      <div className="grid grid-cols-[1.1fr_3fr_2fr] items-center">
        <div>
          <Link to="/">
            <img src={logo} width={"120px"} height={"40px"} alt="logo" />
          </Link>
        </div>
        <div className="grid grid-cols-2 items-center">
          <div className="flex gap-12 text-white cursor-pointer text-orange font-bold">
            <GiHamburgerMenu size={24} />
            <Link>Career</Link>
            <Link>Store</Link>
            <Link>FAQ</Link>
            <Link>...</Link>
          </div>

          <div className="flex relative items-center justify-between">
            <input
              className="Custom_input"
              type="text"
              placeholder="Search here .... "
            />
            <div className="absolute right-4">
              <FaSearch color="#6965e0" />
            </div>
          </div>
        </div>
        <div className="flex gap-11 justify-end">
          <IconsRightPart />
        </div>
      </div>
    </div>
  );
};

export default Header;
