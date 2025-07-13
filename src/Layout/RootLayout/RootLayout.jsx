import { Outlet } from "react-router";
import Header from "../../GlobalComponents/HeaderComponents";
import BodyRightLayout from "../../GlobalComponents/BodyLayout/BodyRightLayout";
import BodyLeftLayout from "../../GlobalComponents/BodyLayout/BodyLeftLayout/BodyLeftLayout";

const RootLayout = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-[1.2fr_5.1fr_.2fr]">
        <BodyLeftLayout />
        <Outlet />
        <BodyRightLayout />
      </div>
    </>
  );
};

export default RootLayout;
