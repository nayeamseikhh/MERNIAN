import storeIcon from "../../../assets/MarketplaceIcon/store01.png";
import Container from "../Container";

const MarketplaceMiddleLayout = () => {
  return (
    <>
      <div>
        <Container>
          <div className=" grid grid-cols-[.5fr_3fr] gap-x-4 h-40 w-full bg-purple01 mt-11 rounded-[14px]">
            <div>
              <img
                className="top-0 left-0 h-full"
                src={storeIcon}
                alt="marketplaceIcon"
              />
            </div>
            <div>
              <div className="mt-[50px]">
                <h1 className="text-white font-poppins font-bold text-4xl">
                  MERNIAN Marketplace
                </h1>
                <p className="font-poppins text-[15px] font-normal text-white">
                  The best place for the community to buy and sell!
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MarketplaceMiddleLayout;
