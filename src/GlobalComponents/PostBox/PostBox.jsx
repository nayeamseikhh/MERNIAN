import { Input } from "antd";
import React from "react";
import {
  FaAlignCenter,
  FaCamera,
  FaLayerGroup,
  FaPhotoVideo,
} from "react-icons/fa";
import TextPost from "./PostType/TextPost";
import ImgPost from "./PostType/ImgPost";
import VideoPost from "./PostType/VideoPost";

const PostBox = () => {
  return (
    <>
      {/* Upload post design */}
      <div className="w-full rounded-t-[10px]  bg-white">
        <div className="grid grid-cols-2 ">
          <div className="flex items-center rounded-tl-[10px]  w-full gap-x-4 justify-center py-7 group hover:bg-purple01 transition-all ease-linear duration-100">
            <FaAlignCenter className="text-white04 group-hover:text-white transition-all ease-linear duration-100" />
            <h6 className="font-poppins font-normal text-[12px] text-white04 group-hover:text-white transition-all ease-linear duration-100">
              Status
            </h6>
          </div>
          <div className="flex items-center rounded-tr-[10px] w-full gap-x-4 justify-center py-7 group hover:bg-purple01 transition-all ease-linear duration-100">
            <FaLayerGroup className="text-white04 group-hover:text-white transition-all ease-linear duration-100" />
            <h6 className="font-poppins font-normal text-[12px] text-white04 group-hover:text-white transition-all ease-linear duration-100">
              Product Upload
            </h6>
          </div>
        </div>
      </div>

      <div className="mt-0.5 w-full lg:h-[200px] bg-white">
        <Input
          placeholder="Hi, MD: Nayeam Seikh, Share your post ..."
          variant="borderless"
        />
      </div>

      <div className="flex justify-between w-full rounded-b-[10px] mt-0.5 bg-white py-4 px-7">
        <div className="flex gap-x-4 items-center">
          <div>
            <FaCamera size={24} />
          </div>
          <div>
            <FaPhotoVideo size={24} />
          </div>
        </div>
        <div className="flex gap-4">
          <button
            className="font-poppins font-semibold text-sm text-white px-12 py-3.5 rounded-lg bg-purple01 hover:bg-black01
           transition-all ease-linear duration-200"
          >
            Discard
          </button>
          <button
            className="font-poppins font-semibold text-sm text-white px-12 py-3.5 rounded-lg bg-purple01 hover:bg-black01
           transition-all ease-linear duration-200"
          >
            Post
          </button>
        </div>
      </div>
      <TextPost />
    </>
  );
};

export default PostBox;
