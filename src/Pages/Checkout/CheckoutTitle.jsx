import React from "react";
import Container from "../../GlobalComponents/BodyLayout/Container";

const CheckoutTitle = () => {
  return (
    <div>
      <div>
        <div>
          <Container>
            <div className="mt-6">
              <p className="text-black02 text-sm font-poppins">YOUR ORDER</p>
              <h1 className="flex font-poppins font-normal text-2xl cursor-pointer hover:underline my-2">
                Checkout
              </h1>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default CheckoutTitle;
