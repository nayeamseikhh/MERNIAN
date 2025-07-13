import Container from "../../GlobalComponents/BodyLayout/Container";
import BodyMiddleLayout from "../../GlobalComponents/BodyLayout/MiddleLayout/BodyMiddleLayout";
import PostBox from "../../GlobalComponents/PostBox/PostBox";
import VideoPost from "../../GlobalComponents/PostBox/PostType/VideoPost";
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
              <VideoPost />
            </div>
            <div></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MiddleLayout;
