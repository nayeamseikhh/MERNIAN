import React from "react";
import Container from "../../GlobalComponents/BodyLayout/Container";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({ name, image, categories, price }) => {
  return (
    <>
      <div className="mt-8 items-center rounded-t-2xl">
        <div className=" w-[320px] bg-white rounded-xl relative">
          <div className="h-[200px] w-full bg-purple01 relative rounded-t-2xl">
            <img
              className="h-full w-full object-cover overflow-hidden rounded-t-2xl"
              src={image}
              alt=""
            />
            <div className="absolute top-[85%] right-5  text-center translate-y-[50%]">
              <div className="mt-0.5 mr-0.5 border border-gray-200 bg-white h-[30px] w-[60px] shadow-gray-200 rounded-4xl">
                ${price}
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h6 className="px-10 font-poppins text-[16px] font-bold ">
              {name}
            </h6>

            <div className="mt-2.5 mb-4">
              <p className="font-poppins text-sm font-light px-10 flex items-center gap-x-2">
                <div className="h-3 w-3 rounded-full bg-green01 " />
                {categories}
              </p>
            </div>
            <div className="mb-7">
              <p className="px-10 text-blue-500 text-[13px] font-light underline">
                Full Screen View
              </p>
            </div>
          </div>
          <div className=" grid grid-cols-2">
            <button className="font-poppins font-semibold text-sm bg-purple01 text-white py-3 hover:bg-green01 transition-all ease-linear duration-200  rounded-bl-xl">
              Add Friend
            </button>
            <button className="font-poppins font-semibold text-sm bg-green01 text-white py-3 hover:bg-purple01 transition-all ease-linear duration-200  rounded-br-xl">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
