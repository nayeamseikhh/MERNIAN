import React, { useState } from "react";
import { friendsData } from "./friendsdata";
import { SlideshowLightbox } from "lightbox.js-react";

const Friends = () => {
  const [initialData, setInitialData] = useState(6);
  const visiblePhotos = friendsData.slice(0, initialData - 1);
  const sixthImage = friendsData[initialData - 1];
  const extraCount = friendsData.length - initialData;
  const handleClick = () => {
    setInitialData((prev) => prev + extraCount);
  };
  return (
    <>
      <div className="mt-3 bg-white rounded-[10px] p-7">
        <div className="flex justify-between">
          <div className="font-poppins font-bold text-[16px] cursor-pointer hover:underline">
            Photos
            <span className="font-poppins font-semibold ml-1 text-[15px] text-white04">
              {friendsData.length}
            </span>
          </div>
          <div className="font-poppins font-bold text-[16px] cursor-pointe">
            ...
          </div>
        </div>
        <div className="flex flex-wrap justify-between mt-6">
          {visiblePhotos?.map((data) => (
            <div className=" mt-3">
              <SlideshowLightbox className="w-[125px] h-[120px] rounded-xl">
                <img
                  className="h-full w-full object-cover overflow-hidden rounded-xl"
                  src={data.image}
                  alt="friendImg"
                />
              </SlideshowLightbox>
            </div>
          ))}

          <div className="mt-3 relative">
            <div className="w-[125px] h-[120px] rounded-xl overflow-hidden ">
              <img
                className="h-full w-full object-cover rounded-xl"
                src={sixthImage.image}
                alt="friendImg"
              />
            </div>
            {extraCount > 0 && (
              <div
                onClick={handleClick}
                className="absolute top-0 left-0 w-full h-full  bg-opacity-50 flex items-center justify-center text-white text-[18px] font-bold rounded-xl cursor-pointer"
              >
                +{extraCount}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Friends;
