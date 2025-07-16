import React from "react";
import Container from "../../GlobalComponents/BodyLayout/Container";

const ProductTitle = () => {
  return (
    <div>
      <div>
        <div>
          <Container>
            <div className="mt-6">
              <p className="text-black02 text-sm font-poppins">
                BROWSE PRODUCTS
              </p>
              <h1 className="flex font-poppins font-normal text-2xl cursor-pointer hover:underline my-2">
                Digital Items
              </h1>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ProductTitle;
