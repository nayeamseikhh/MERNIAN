import About from "../../Pages/About";
import facebook from "../../assets/SocialIcons/facebook 1.png";
import instagram from "../../assets/SocialIcons/insta 1.png";
import twitter from "../../assets/SocialIcons/twitter 1.png";
import youtube from "../../assets/SocialIcons/youtube 1.png";
import bgImg from "../../assets/backgroundImage/bg-img.jpg";
import bgImg01 from "../../assets/backgroundImage/bgimg02.jpg";
import PostBox from "../PostBox/PostBox";
import Container from "./Container";

const BodyMiddleLayout = () => {
  return (
    <>
      <div>
        <Container>
          <div className="relative  mx-auto bg-white mt-8 rounded-[10px]">
            <div className="relative h-[300px] w-full mx-auto mt-8 ">
              <img
                className="h-full w-full object-cover overflow-hidden rounded-t-[10px]"
                src={bgImg01}
                alt=""
              />
              <div className="absolute h-[150px] w-[150px] bg-purple01 top-[100%] left-[50%] -translate-[50%] rounded-full border-4 border-white">
                <img
                  className="h-full w-full rounded-full object-cover "
                  src={bgImg}
                  alt="profileImage"
                />
              </div>

              <div className="absolute top-[92%] left-[68%] ">
                <div className="flex gap-x-5 ">
                  <button className="font-poppins font-semibold text-sm text-white px-12 py-3.5 rounded-lg bg-purple01 hover:bg-green01 transition-all ease-linear duration-200">
                    Add Friend
                  </button>
                  <button className="font-poppins font-semibold text-sm text-white px-12 py-3.5 rounded-lg  bg-purple01 hover:bg-green01 transition-all ease-linear duration-200">
                    Send Masseage
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="flex gap-x-4 mt-20 mb-6 justify-center">
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
              <div className="mt-20 text-center">
                <h4 className="font-poppins font-bold text-[16px] cursor-pointer hover:underline">
                  MD: Nayeam Seikh
                </h4>
                <p className="font-poppins font-normal text-[12px] text-white04 cursor-pointer hover:underline">
                  www.nayeam.com
                </p>
              </div>
              <div className="flex justify-center mt-20 gap-4">
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
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BodyMiddleLayout;
