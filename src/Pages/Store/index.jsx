import React from "react";
import MarketplaceMiddleLayout from "../../GlobalComponents/BodyLayout/MiddleLayout/MarketplaceMiddleLayout";
import Container from "../../GlobalComponents/BodyLayout/Container";
import ProductCard from "../Product/ProductCard";
import { productData } from "../Product/productData";
import { useDispatch, useSelector } from "react-redux";

const Store = () => {
  return (
    <>
      <div className="bg-white02">
        <MarketplaceMiddleLayout />
        <Container>
          <div className="mt-11">
            <div className="font-poppins text-xl font-bold ">Categories</div>
            <div className="flex gap-x-4 bg-white  rounded-xl items-center justify-start p-5 mt-6">
              <p>Desktop</p>
              <p>Laptop</p>
              <p>Component</p>
              <p>Monitor</p>
              <p>UPS</p>
              <p>Tablet</p>
              <p>Office Equipment</p>
              <p>Camera</p>
              <p>Security</p>
              <p>Security</p>
              <p>Software</p>
              <p>Accessories</p>
              <p>Gadget</p>
              <p>Gaming</p>
            </div>
            <div>
              <div className="flex flex-wrap gap-x-8">
                {productData?.map((data) => (
                  <ProductCard
                    name={data.name}
                    categories={data.categories}
                    price={data.price}
                    image={data.image}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* <div className="my-44 font-bold text-3xl">
            {postList.map((data) => (
              <h1>{data.postList}</h1>
            ))}
          </div> */}
        </Container>
      </div>
    </>
  );
};

export default Store;
