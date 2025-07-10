import BodyMiddleLayout from "../../GlobalComponents/BodyLayout/BodyMiddleLayout";
import Container from "../../GlobalComponents/BodyLayout/Container";
import PostBox from "../../GlobalComponents/PostBox/PostBox";
import About from "../About";
import Friends from "../Friends";
import Videos from "../Videos";
const MiddleLayout = () => {
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
              <PostBox />
            </div>
            <div></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MiddleLayout;
