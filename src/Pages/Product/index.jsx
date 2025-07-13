import React from "react";
import MarketplaceMiddleLayout from "../../GlobalComponents/BodyLayout/MiddleLayout/MarketplaceMiddleLayout";
import ProductTitle from "./ProductTitle";
import SearchAndFilterPart from "./SearchAnd filterPart";
import ProductCard from "./ProductCard";
import { productData } from "./productData";
import Container from "../../GlobalComponents/BodyLayout/Container";

const Product = () => {
  return (
    <div className="bg-white02">
      <div>
        <MarketplaceMiddleLayout />
        <ProductTitle />
        <SearchAndFilterPart />
      </div>
      <Container>
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
      </Container>
    </div>
  );
};

export default Product;
