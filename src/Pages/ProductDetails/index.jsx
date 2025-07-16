import Container from "../../GlobalComponents/BodyLayout/Container";
import MarketplaceMiddleLayout from "../../GlobalComponents/BodyLayout/MiddleLayout/MarketplaceMiddleLayout";
import ProductTitle from "./ProductTitle";
import SingleProduct from "./SingleProduct";
import RightCart from "./RightCart";
import ProductDescription from "./ProductDescription";

const ProductDetails = () => {
  return (
    <div className="bg-white02">
      <MarketplaceMiddleLayout />
      <ProductTitle />
      <Container>
        <div className="grid grid-cols-[3fr_1fr] mt-8">
          <div className="mx-auto">
            <SingleProduct />
          </div>
          <RightCart />
        </div>
        <div className="grid grid-cols-[3fr_1fr] mt-8">
          <ProductDescription />
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
