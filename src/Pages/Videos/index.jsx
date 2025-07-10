import React from "react";

const Videos = () => {
  return (
    <>
      <div className="mt-3 bg-white rounded-[10px] p-7">
        <div className="flex justify-between">
          <h1 className="font-poppins font-bold text-[16px] cursor-pointer hover:underline">
            videos
          </h1>
          <span className="font-poppins font-bold text-[16px] cursor-pointe text-end">
            ...
          </span>
        </div>
        <div>
          <div className="w-[255px] h-[120px] rounded-2xl bg-purple01 my-6"></div>
        </div>
      </div>
    </>
  );
};

export default Videos;
