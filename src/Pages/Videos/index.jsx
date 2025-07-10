import React, { useState } from "react";
import { videoData } from "./videoData";

const Videos = () => {
  const [initialData, setInitialData] = useState(3);
  return (
    <>
      <div className="mt-3 bg-white rounded-[10px] p-7">
        <div className="flex justify-between">
          <h1 className="font-poppins font-bold text-[16px] cursor-pointer hover:underline">
            videos
            <span className="font-poppins font-semibold ml-1 text-[15px] text-white04">
              {videoData.length}
            </span>
          </h1>
          <span className="font-poppins font-bold text-[16px] cursor-pointer text-end">
            ...
          </span>
        </div>
        <div>
          {videoData?.slice(0, initialData)?.map((data) => (
            <div className="w-[255px] h-[120px] rounded-2xl  my-6">
              <video
                className="h-full w-full rounded-2xl object-cover"
                controls={true}
                src={data.videos}
              ></video>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Videos;
