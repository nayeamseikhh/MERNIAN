import React from "react";
import { friendsData } from "./friendsdata";

const Friends = () => {
  return (
    <>
      <div className="mt-3 bg-white rounded-[10px] p-7">
        <div className="flex justify-between">
          <div className="font-poppins font-bold text-[16px] cursor-pointer hover:underline">
            Photos
          </div>
          <div className="font-poppins font-bold text-[16px] cursor-pointe">
            ...
          </div>
        </div>
        <div className="flex flex-wrap justify-between mt-6">
          {/* <div className="w-[125px] h-[120px] bg-purple01 rounded-2xl">1</div> */}
          {friendsData?.map((data) => (
            <div className="w-[125px] h-[120px] rounded-xl mt-3">
              <img
                className="h-full w-full object-cover overflow-hidden rounded-xl"
                src={data.image}
                alt="friendImg"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Friends;
