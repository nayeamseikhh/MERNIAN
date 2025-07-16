import React from "react";
import Container from "../../GlobalComponents/BodyLayout/Container";
import MarketplaceMiddleLayout from "../../GlobalComponents/BodyLayout/MiddleLayout/MarketplaceMiddleLayout";
import CheckoutTitle from "./CheckoutTitle";
import CheckoutCart from "./CheckoutCart";
import BillingDetails from "./BillingDetails";

const Checkout = () => {
  return (
    <div className="bg-white02">
      <MarketplaceMiddleLayout />
      <CheckoutTitle />
      <Container>
        <div className="grid grid-cols-[3fr_1fr] mt-8  gap-x-4">
          <div>
            <BillingDetails />
          </div>
          <div>
            <CheckoutCart />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
