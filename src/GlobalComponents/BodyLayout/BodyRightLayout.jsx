import React from "react";
import { friendsData } from "../../Pages/Friends/friendsdata";

const BodyRightLayout = () => {
  return (
    <>
      <div className="bg-white h-full flex justify-center">
        <div>
          {friendsData?.map((data) => (
            <div className="h-[40px] w-[40px] bg-purple01 rounded-full mt-3 border border-black03">
              <img
                className="h-full w-full object-cover overflow-hidden rounded-full"
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

export default BodyRightLayout;
