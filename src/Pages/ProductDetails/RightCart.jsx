import { FaStar } from "react-icons/fa";

const RightCart = () => {
  return (
    <>
      <div className="bg-white mt-8 rounded-xl p-[30px] h-[350px]">
        <div>
          <h4 className="font-poppins text-5xl font-medium mt-3.5 flex justify-center">
            <span className="text-green01">$</span>39.00
          </h4>
        </div>
        <div className=" my-14">
          <div className="flex justify-between">
            <div>
              <h6 className="font-poppins text-2xl font-semibold">1,320</h6>
              <p className="font-poppins font-medium text-sm text-black03">
                Sales
              </p>
            </div>
            <div className="h-12 w-[1px] bg-black03"></div>
            <div>
              <div>
                <h6 className="font-poppins text-2xl font-semibold">4.2/5</h6>
                <p className="font-poppins font-medium text-sm text-black03 flex">
                  <FaStar className="text-yellow-300" />
                  <FaStar className="text-yellow-300" />
                  <FaStar className="text-yellow-300" />
                  <FaStar className="text-yellow-300" />
                  <FaStar className="text-yellow-300" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="py-[15px] w-full bg-green01 border border-gray-300 rounded-xl font-poppins font-normal text-xs text-white hover:bg-transparent hover:text-black02 transition-all ease-linear duration-200">
            Add to your cart
          </button>
        </div>
      </div>
    </>
  );
};

export default RightCart;
