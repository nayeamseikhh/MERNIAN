import React, { useState } from "react";
import BodyMiddleLayout from "../../GlobalComponents/BodyLayout/BodyMiddleLayout";
import Container from "../../GlobalComponents/BodyLayout/Container";
import { Input } from "antd";
import FriendsCard from "./FriendsCard";
import { friendsData } from "./friendsdata";

const FriendsPage = () => {
  const [initalData, setInitialData] = useState(8);
  // const remainingData = friendsData.length
  const viewMore = () => {
    setInitialData((prev) => prev + initalData);
  };
  return (
    <>
      <div className="bg-white02">
        <BodyMiddleLayout />
        <Container>
          <div>
            <div className="mt-16 mb-8">
              <h6 className="text-black02 font-poppins">BROWSE MD NAYEAM</h6>
              <h1 className="flex font-poppins font-bold text-[16px] cursor-pointer hover:underline my-2">
                Friends 82
              </h1>
            </div>
            <div className="grid grid-cols-[2fr_1fr] bg-white p-4 rounded-xl">
              <div>
                <Input.Search
                  placeholder="Filled"
                  variant="filled"
                  size="large"
                  rootClassName="custom-searchbox"
                />
              </div>
              <div></div>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-10 mb-10">
            {friendsData?.slice(0, initalData).map((data) => (
              <FriendsCard name={data.name} image={data.image} />
            ))}
          </div>
          <div className="flex justify-center mb-11">
            {(initalData < friendsData.length && (
              <button
                onClick={viewMore}
                className="font-poppins font-semibold text-sm bg-purple01 text-white px-5 py-3.5 hover:bg-green01 transition-all ease-linear duration-200  rounded-xl"
              >
                Load More
              </button>
            )) ||
              " "}
          </div>
        </Container>
      </div>
    </>
  );
};

export default FriendsPage;
