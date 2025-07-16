import React from "react";
import Container from "../../GlobalComponents/BodyLayout/Container";

const CartTitle = () => {
  return (
    <div>
      <div>
        <Container>
          <div className="mt-6">
            <p className="text-black02 text-sm font-poppins">BROWSE YOUR</p>
            <h1 className="flex font-poppins font-normal text-2xl cursor-pointer hover:underline my-2">
              Shopping cart 3
            </h1>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CartTitle;
