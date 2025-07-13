import { Link } from "react-router";
import { CgProfile } from "react-icons/cg";
import { SlPeople } from "react-icons/sl";
import {
  FaLayerGroup,
  FaNewspaper,
  FaStore,
  FaUserFriends,
  FaVideo,
} from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { FaHandsAslInterpreting } from "react-icons/fa6";
import { MdLogout, MdProductionQuantityLimits } from "react-icons/md";

const PagePart = () => {
  return (
    <>
      <div className="mt-14">
        <div className="flex items-center justify-start gap-x-6  w-[85%] py-4 px-5 hover:bg-green01 mx-auto rounded-lg transition-all ease-linear duration-100 group">
          <FaNewspaper
            className="text-black02 group-hover:text-white transition-all ease-linear duration-100"
            size={22}
          />
          <Link
            to="/"
            className="text-black02 group-hover:text-white transition-all ease-linear duration-100"
          >
            Newsfeed
          </Link>
        </div>
        <div className="flex items-center justify-start gap-x-6  w-[85%] py-4 px-5 hover:bg-green01 mx-auto rounded-lg transition-all ease-linear duration-200 group">
          <CgProfile
            className="text-black02 group-hover:text-white transition-all ease-linear duration-100"
            size={22}
          />
          <Link
            to="/profile"
            className="text-black02 group-hover:text-white transition-all ease-linear duration-100"
          >
            Profile
          </Link>
        </div>

        <div className="flex items-center justify-start gap-x-6  w-[85%] py-4 px-5 hover:bg-green01 mx-auto rounded-lg transition-all ease-linear duration-200 group">
          <MdProductionQuantityLimits
            className="text-black02 group-hover:text-white transition-all ease-linear duration-100"
            size={22}
          />
          <Link
            to="/product"
            className="text-black02 group-hover:text-white transition-all ease-linear duration-100"
          >
            Products
          </Link>
        </div>

        <div className="flex items-center justify-start gap-x-6  w-[85%] py-4 px-5 hover:bg-green01 mx-auto rounded-lg transition-all ease-linear duration-200 group">
          <FaStore
            className="text-black02 group-hover:text-white transition-all ease-linear duration-100"
            size={22}
          />
          <Link
            to="/store"
            className="text-black02 group-hover:text-white transition-all ease-linear duration-100"
          >
            Store
          </Link>
        </div>

        <div className="flex items-center justify-start gap-x-6  w-[85%] py-4 px-5 hover:bg-green01 mx-auto rounded-lg transition-all ease-linear duration-200 group">
          <FaLayerGroup
            className="text-black02 group-hover:text-white transition-all ease-linear duration-100"
            size={22}
          />
          <Link className="text-black02 group-hover:text-white transition-all ease-linear duration-100">
            Groups
          </Link>
        </div>
        <div className="flex items-center justify-start gap-x-6  w-[85%] py-4 px-5 hover:bg-green01 mx-auto rounded-lg transition-all ease-linear duration-200 group">
          <IoMdPhotos
            className="text-black02 group-hover:text-white transition-all ease-linear duration-100"
            size={22}
          />
          <Link className="text-black02 group-hover:text-white transition-all ease-linear duration-100">
            Photos
          </Link>
        </div>
        <div className="flex items-center justify-start gap-x-6  w-[85%] py-4 px-5 hover:bg-green01 mx-auto rounded-lg transition-all ease-linear duration-200 group">
          <FaUserFriends
            className="text-black02 group-hover:text-white transition-all ease-linear duration-100"
            size={22}
          />
          <Link
            to="friend"
            className="text-black02 group-hover:text-white transition-all ease-linear duration-100"
          >
            Friends
          </Link>
        </div>
        <div className="flex items-centerjustify-start gap-x-6  w-[85%] py-4 px-5 hover:bg-green01 mx-auto rounded-lg transition-all ease-linear duration-200 group">
          <FaHandsAslInterpreting
            className="text-black02 group-hover:text-white transition-all ease-linear duration-100"
            size={22}
          />
          <Link className="text-black02 group-hover:text-white transition-all ease-linear duration-100">
            Friends Request
          </Link>
        </div>
        <div className="flex items-centerjustify-start gap-x-6  w-[85%] py-4 px-5 hover:bg-green01 mx-auto rounded-lg transition-all ease-linear duration-200 group">
          <SlPeople
            className="text-black02 group-hover:text-white transition-all ease-linear duration-100"
            size={22}
          />
          <Link
            to="/about"
            className="text-black02 group-hover:text-white transition-all ease-linear duration-100"
          >
            About
          </Link>
        </div>
        <div className="flex items-center justify-start gap-x-6  w-[85%] py-4 px-5 hover:bg-green01 mx-auto rounded-lg transition-all ease-linear duration-200 group">
          <MdLogout
            className="text-black02 group-hover:text-white transition-all ease-linear duration-100"
            size={22}
          />
          <Link className="text-black02 group-hover:text-white transition-all ease-linear duration-100">
            Logout
          </Link>
        </div>
      </div>
    </>
  );
};

export default PagePart;
