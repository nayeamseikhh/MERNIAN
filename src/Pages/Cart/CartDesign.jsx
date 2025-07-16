import img01 from "../../assets/ProductImages/phone01.jpg";
import Container from "../../GlobalComponents/BodyLayout/Container";
import { MdDelete, MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const CartDesign = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-[3.5fr_1fr] gap-x-4">
          <div>
            <div>
              <div className="grid grid-cols-[3.2fr_2.6fr_2fr] mt-1 p-2">
                <h6 className="font-poppins text-[15px] font-medium">ITEM</h6>
                <h6 className="font-poppins text-[15px] font-medium">
                  QUANTITY
                </h6>
                <h6 className="font-poppins text-[15px] font-medium">PRICE</h6>
              </div>
            </div>
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr] bg-white rounded-xl">
              <div className="px-7 py-5 flex gap-x-6">
                <div className="h-[60px] w-24 ">
                  <img
                    className="h-full w-full object-cover overflow-hidden rounded-lg"
                    src={img01}
                    alt=""
                  />
                </div>
                <div className="items-center">
                  <h6 className="font-poppins font-medium text-sm text-purple05">
                    Twitch stream ui pack
                  </h6>
                  <p className="font-poppins font-normal text-[13px]">
                    Stream packs
                  </p>
                  <p className="font-poppins font-normal text-[12px]">
                    Nayeam Seikh
                  </p>
                </div>
              </div>
              <div className=" py-5 w-[96px] ">
                <div className="border border-gray-300 rounded-xl">
                  <div className="flex justify-between items-center">
                    <div className="font-poppins font-medium text-[17px] mx-auto ">
                      1
                    </div>
                    <div className="py-[3px] px-[5px]">
                      <MdKeyboardArrowUp size={20} />
                      <MdKeyboardArrowDown size={20} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center font-poppins text-[17px] font-medium justify-end">
                <span className="text-green01">$</span>12.00
              </div>
              <div className="flex justify-end mr-8 items-center">
                <div className="h-8 w-8 bg-red-500 rounded-full items-center text-white flex justify-center">
                  <MdDelete size={22} />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white mt-11 rounded-xl p-[30px]">
            <div>
              <h6 className="font-poppins text-[17px] font-medium">
                Order Totals
              </h6>
              <h4 className="font-poppins text-5xl font-medium mt-3.5 flex justify-center">
                <span className="text-green01">$</span>39.00
              </h4>
            </div>
            <div className=" my-14">
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
              <button className="py-[15px] w-full bg-green01 border border-gray-300 rounded-xl font-poppins font-normal text-xs text-white hover:bg-transparent hover:text-black02 transition-all ease-linear duration-200">
                Proccecd to checkout
              </button>
              <button className="py-[15px] w-full bg-transparent border border-gray-300 rounded-xl font-poppins font-normal text-xs text-black02 mt-2 hover:bg-green01 hover:text-white transition-all ease-linear duration-200">
                Update cart
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartDesign;
