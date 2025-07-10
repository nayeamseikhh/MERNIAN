import bgImg02 from "../../assets/backgroundImage/bgimg02.jpg";
import bgImg from "../../assets/backgroundImage/bg-img.jpg";
import { Link } from "react-router";
import {
  FaLayerGroup,
  FaNewspaper,
  FaUserFriends,
  FaVideo,
} from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { FaHandsAslInterpreting } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

const BodyLeftLayout = () => {
  return (
    <>
      <div className="w-full h-full bg-white">
        <div className="">
          <div className="h-[75px] w-full bg-amber-800 relative">
            <img className="h-full w-full object-cover" src={bgImg02} alt="" />
            <div className="h-28 w-28 rounded-full bg-white top-[30%] left-[30%] absolute border-4 border-white">
              <img
                className="h-full w-full rounded-full object-cover "
                src={bgImg}
                alt=""
              />
            </div>
          </div>
          <div className="mt-20 text-center">
            <h4 className="font-poppins font-bold text-[16px] cursor-pointer hover:underline">
              MD: Nayeam Seikh
            </h4>
            <p className="font-poppins font-normal text-[12px] text-white04 cursor-pointer hover:underline">
              www.nayeam.com
            </p>
          </div>
          <div className="flex gap-x-4 mt-11 justify-center">
            <div>
              <h6 className="font-poppins font-bold text-[16px] cursor-pointer hover:underline">
                930
              </h6>
              <p className="font-poppins font-normal text-[12px] text-white04">
                Friends
              </p>
            </div>
            <span className="w-[1px] h-8 bg-purple04"></span>
            <div>
              <h6 className="font-poppins font-bold text-[16px] cursor-pointer hover:underline">
                87
              </h6>
              <p className="font-poppins font-normal text-[12px] text-white04">
                Posts
              </p>
            </div>
            <span className="w-[1px] h-8 bg-purple04"></span>
            <div>
              <h6 className="font-poppins font-bold text-[16px] cursor-pointer hover:underline">
                1k
              </h6>
              <p className="font-poppins font-normal text-[12px] text-white04">
                Followers
              </p>
            </div>
          </div>
          <div className="mt-14">
            <div className="flex items-center justify-start gap-x-6  w-[85%] py-4 px-5 hover:bg-green01 mx-auto rounded-lg transition-all ease-linear duration-100 group">
              <FaNewspaper
                className="text-black02 group-hover:text-white transition-all ease-linear duration-100"
                size={22}
              />
              <Link className="text-black02 group-hover:text-white transition-all ease-linear duration-100">
                Newsfeed
              </Link>
            </div>
            <div className="flex items-center justify-start gap-x-6  w-[85%] py-4 px-5 hover:bg-green01 mx-auto rounded-lg transition-all ease-linear duration-200 group">
              <FaVideo
                className="text-black02 group-hover:text-white transition-all ease-linear duration-100"
                size={22}
              />
              <Link className="text-black02 group-hover:text-white transition-all ease-linear duration-100">
                Videos
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
              <Link className="text-black02 group-hover:text-white transition-all ease-linear duration-100">
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
        </div>
      </div>
    </>
  );
};

export default BodyLeftLayout;
