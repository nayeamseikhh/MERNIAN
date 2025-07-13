import Container from "../../GlobalComponents/BodyLayout/Container";
import About from "../About";
import Friends from "../Friends";
import Videos from "../Videos";
import TextPost from "../../GlobalComponents/PostBox/PostType/TextPost";
import VideoPost from "../../GlobalComponents/PostBox/PostType/VideoPost";
import BodyMiddleLayout from "../../GlobalComponents/BodyLayout/MiddleLayout/BodyMiddleLayout";

const Profile = () => {
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
              <TextPost />
              <VideoPost />
              <TextPost />
              <TextPost />
            </div>
            <div></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Profile;
