import React from "react";

const ParsonalInfo = () => {
  return (
    <>
      <div className="p-7 bg-white rounded-[10px] my-6">
        <div>
          <div className="flex justify-between ">
            <h4 className="font-poppins font-bold text-[16px] cursor-pointer hover:underline">
              Personal Info
            </h4>
            <span className="font-poppins font-bold text-[16px] cursor-pointe">
              ...
            </span>
          </div>

          <div className="mt-5">
            <div className="flex justify-between p-4">
              <p className="font-poppins font-semibold text-[12px] text-white04">
                Email:
              </p>
              <p className="font-poppins font-normal text-[12px] text-white04">
                Nayeamseikh1@gmail.com
              </p>
            </div>
            <div className="flex justify-between p-4">
              <p className="font-poppins font-semibold text-[12px] text-white04">
                Birthday:
              </p>
              <p className="font-poppins font-normal text-[12px] text-white04">
                26th september 1995
              </p>
            </div>
            <div className="flex justify-between p-4">
              <p className="font-poppins font-semibold text-[12px] text-white04">
                Occupation:
              </p>
              <p className="font-poppins font-normal text-[12px] text-white04">
                MERN Stack Developer
              </p>
            </div>
            <div className="flex justify-between p-4">
              <p className="font-poppins font-semibold text-[12px] text-white04">
                Status:
              </p>
              <p className="font-poppins font-normal text-[12px] text-white04">
                Married
              </p>
            </div>
            <div className="flex justify-between p-4">
              <p className="font-poppins font-semibold text-[12px] text-white04">
                BirthPlace:
              </p>
              <p className="font-poppins font-normal text-[12px] text-white04">
                Rajshahi
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParsonalInfo;
