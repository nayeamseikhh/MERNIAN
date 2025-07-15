import React from "react";
import { FaAlignCenter, FaLayerGroup } from "react-icons/fa";
import { Link } from "react-router";
import ProductUploadFill from "./ProductUploadFill";

const ProductUploadPostbox = () => {
  return (
    <>
      {/* Upload post design */}
      <div className="w-full rounded-t-[10px]  bg-white">
        <div className="grid grid-cols-2 ">
          <Link to="/">
            <div className="flex items-center rounded-tl-[10px]  w-full gap-x-4 justify-center py-7 group hover:bg-purple01 active:bg-purple01 transition-all ease-linear duration-100">
              <FaAlignCenter className="text-white04 group-hover:text-white transition-all ease-linear duration-100" />
              <h6 className="font-poppins font-normal text-[12px] text-white04 group-hover:text-white transition-all ease-linear duration-100">
                Status
              </h6>
            </div>
          </Link>
          <Link to="/product_upload">
            <div className="flex items-center rounded-tr-[10px] w-full gap-x-4 justify-center py-7 group hover:bg-purple01 transition-all ease-linear duration-100">
              <FaLayerGroup className="text-white04 group-hover:text-white transition-all ease-linear duration-100" />
              <h6 className="font-poppins font-normal text-[12px] text-white04 group-hover:text-white transition-all ease-linear duration-100">
                Product Upload
              </h6>
            </div>
          </Link>
        </div>
        <ProductUploadFill />
      </div>
    </>
  );
};

export default ProductUploadPostbox;
