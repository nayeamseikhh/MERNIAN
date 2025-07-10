import bgImg02 from "../../assets/backgroundImage/bgimg02.jpg";
import bgImg from "../../assets/backgroundImage/bg-img.jpg";
import facebook from "../../assets/SocialIcons/facebook 1.png";
import instagram from "../../assets/SocialIcons/insta 1.png";
import twitter from "../../assets/SocialIcons/twitter 1.png";
import youtube from "../../assets/SocialIcons/youtube 1.png";

const FriendsCard = ({ name, image }) => {
  return (
    <>
      <div className="mt-8 items-center ">
        <div className=" w-[320px] bg-white rounded-xl relative">
          <div className="h-[75px] w-full relative">
            <img
              className="h-full w-full object-cover overflow-hidden rounded-t-xl"
              src={bgImg02}
              alt=""
            />
            <div className="h-28 w-28 rounded-full bg-white top-[30%] left-[30%] absolute border-4 border-white">
              <img
                className="h-full w-full rounded-full object-cover "
                src={image}
                alt="profileImage"
              />
            </div>
          </div>
          <div className="mt-20 text-center">
            <h4 className="font-poppins font-bold text-[16px] cursor-pointer hover:underline">
              {name}
            </h4>
            <p className="font-poppins font-normal text-[12px] text-white04 cursor-pointer hover:underline">
              www.nayeam.com
            </p>
          </div>
          <div className="flex gap-x-4 mt-11 justify-center">
            <div>
              <h6 className="font-poppins font-bold text-[16px] cursor-pointer hover:underline ml-1">
                930
              </h6>
              <p className="font-poppins font-normal text-[12px] text-white04">
                Friends
              </p>
            </div>
            <span className="w-[1px] h-8 bg-purple04"></span>
            <div>
              <h6 className="font-poppins font-bold text-[16px] cursor-pointer hover:underline ml-1">
                87
              </h6>
              <p className="font-poppins font-normal text-[12px] text-white04 ">
                Posts
              </p>
            </div>
            <span className="w-[1px] h-8 bg-purple04"></span>
            <div>
              <h6 className="font-poppins font-bold text-[16px] cursor-pointer hover:underline ml-4">
                1k
              </h6>
              <p className="font-poppins font-normal text-[12px] text-white04">
                Followers
              </p>
            </div>
          </div>
          <div className="flex justify-center my-8 gap-4 ">
            <img
              className="h-[40px] w-[40px] object-cover "
              src={facebook}
              alt="facebook"
            />
            <img
              className="h-[40px] w-[40px] object-cover "
              src={instagram}
              alt="instagram"
            />
            <img
              className="h-[40px] w-[40px] object-cover "
              src={twitter}
              alt="twitter"
            />
            <img
              className="h-[40px] w-[40px] object-cover "
              src={youtube}
              alt="youtube"
            />
          </div>
          <div className=" grid grid-cols-2">
            <button className="font-poppins font-semibold text-sm bg-purple01 text-white py-3 hover:bg-green01 transition-all ease-linear duration-200  rounded-bl-xl">
              Add Friend
            </button>
            <button className="font-poppins font-semibold text-sm bg-green01 text-white py-3 hover:bg-purple01 transition-all ease-linear duration-200  rounded-br-xl">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendsCard;
