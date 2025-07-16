import React from "react";
import Container from "../../GlobalComponents/BodyLayout/Container";
import MarketplaceMiddleLayout from "../../GlobalComponents/BodyLayout/MiddleLayout/MarketplaceMiddleLayout";
import CartTitle from "./CartTitle";
import CartDesign from "./CartDesign";

const Cart = () => {
  return (
    <>
      <div className="bg-white02">
        <Container>
          <MarketplaceMiddleLayout />
          <CartTitle />
          <CartDesign />
        </Container>
      </div>
    </>
  );
};

export default Cart;
