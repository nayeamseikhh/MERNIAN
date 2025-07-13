import bgImg02 from "../../../assets/backgroundImage/bgimg02.jpg";
import bgImg from "../../../assets/backgroundImage/bg-img.jpg";

const ProfilePart = () => {
  return (
    <>
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
    </>
  );
};

export default ProfilePart;
