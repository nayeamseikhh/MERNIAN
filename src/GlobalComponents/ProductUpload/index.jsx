import BodyMiddleLayout from "../BodyLayout/MiddleLayout/BodyMiddleLayout";
import Container from "../BodyLayout/Container";
import About from "../../Pages/About";
import Friends from "../../Pages/Friends";
import Videos from "../../Pages/Videos";
import ProductUploadPostbox from "./ProductUploadPostbox";

const ProductUpload = () => {
  return (
    <>
      <div className="bg-white02">
        <BodyMiddleLayout />
        <Container>
          <div className="grid grid-cols-[.8fr_2fr_.6fr] gap-x-4 mt-8">
            <div>
              <About />
              <Friends />
              <Videos />
            </div>
            <div>
              <ProductUploadPostbox />
            </div>
            <div></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProductUpload;
