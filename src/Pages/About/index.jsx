import React from "react";

const About = () => {
  return (
    <>
      <div className="p-7 bg-white rounded-[10px] ">
        <div>
          <div className="flex justify-between ">
            <h4 className="font-poppins font-bold text-[16px] cursor-pointer hover:underline">
              About Me
            </h4>
            <span className="font-poppins font-bold text-[16px] cursor-pointe">
              ...
            </span>
          </div>
          <div className="mt-[29px]">
            <p className="font-poppins font-normal text-[12px] text-white04">
              Hi! My name is A B M Shawon Islam but some people may know me as
              GameHuntress! I have a Twitch channel where I stream, play and
              review all the newest games.
            </p>
          </div>
          <div className="mt-5">
            <div className="flex justify-between p-4">
              <p className="font-poppins font-semibold text-[12px] text-white04">
                Joined:
              </p>
              <p className="font-poppins font-normal text-[12px] text-white04">
                22 November 2008
              </p>
            </div>
            <div className="flex justify-between p-4">
              <p className="font-poppins font-semibold text-[12px] text-white04">
                City:
              </p>
              <p className="font-poppins font-normal text-[12px] text-white04">
                Dhaka
              </p>
            </div>
            <div className="flex justify-between p-4">
              <p className="font-poppins font-semibold text-[12px] text-white04">
                Age:
              </p>
              <p className="font-poppins font-normal text-[12px] text-white04">
                18 years
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
