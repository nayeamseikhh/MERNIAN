import React from "react";

const CheckoutCart = () => {
  return (
    <>
      <div className="bg-white  rounded-xl p-[30px]">
        <div>
          <div>
            <h4 className="font-poppins text-[17px] font-medium">
              Order Summery
            </h4>
            <div className=" my-14"></div>
            <div className="flex justify-between py-2.5 mr-2">
              <h6>Cart(3)</h6>
              <h6>
                <span className="text-green01">$</span>44.00
              </h6>
            </div>
            <div className="flex justify-between py-2.5">
              <h6>Code</h6>
              <h6>
                -<span className="text-green01">$</span>15.00
              </h6>
            </div>
            <div className="flex justify-between py-2.5 mr-2">
              <h6>Total</h6>
              <h6>
                <span className="text-green01">$</span>39.00
              </h6>
            </div>
            <div className="flex justify-between py-2.5 mr-2">
              <h6>Total</h6>
              <h6>
                <span className="text-green01">$</span>39.00
              </h6>
            </div>
            <div className="flex justify-between py-2.5 mr-2">
              <h6>Total</h6>
              <h6>
                <span className="text-green01">$</span>39.00
              </h6>
            </div>
          </div>
        </div>

        <div className=" my-14">
          <div className="h-[1px] w-full bg-black02"></div>
          <div className="flex justify-between py-2.5 mr-2">
            <h6>Cart(3)</h6>
            <h6>
              <span className="text-green01">$</span>44.00
            </h6>
          </div>
          <div className="flex justify-between py-2.5">
            <h6>Code</h6>
            <h6>
              -<span className="text-green01">$</span>15.00
            </h6>
          </div>
          <div className="flex justify-between py-2.5 mr-2">
            <h6>Total</h6>
            <h6>
              <span className="text-green01">$</span>39.00
            </h6>
          </div>
        </div>

        <div>
          <h4 className="font-poppins text-5xl font-medium mt-3.5 flex justify-center">
            <span className="text-green01">$</span>39.00
          </h4>
        </div>

        <div>
          <div className=" my-14">
            <div className="h-[1px] w-full bg-black02"></div>
            <div className="flex justify-between py-2.5 mr-2">
              <h6>Cart(3)</h6>
              <h6>
                <span className="text-green01">$</span>44.00
              </h6>
            </div>
            <div className="flex justify-between py-2.5">
              <h6>Code</h6>
              <h6>
                -<span className="text-green01">$</span>15.00
              </h6>
            </div>
            <div className="flex justify-between py-2.5 mr-2">
              <h6>Total</h6>
              <h6>
                <span className="text-green01">$</span>39.00
              </h6>
            </div>
          </div>
        </div>
        <div>
          <button className="py-[15px] w-full bg-green01 border border-gray-300 rounded-xl font-poppins font-normal text-xs text-white hover:bg-transparent hover:text-black02 transition-all ease-linear duration-200">
            Complete order !
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckoutCart;
