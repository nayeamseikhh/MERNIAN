import React from "react";
import Container from "../../GlobalComponents/BodyLayout/Container";
import BodyMiddleLayout from "../../GlobalComponents/BodyLayout/BodyMiddleLayout";
import About from "../About";
import Friends from "../Friends";
import Videos from "../Videos";
import PostBox from "../../GlobalComponents/PostBox/PostBox";
import TextPost from "../../GlobalComponents/PostBox/PostType/TextPost";
import VideoPost from "../../GlobalComponents/PostBox/PostType/VideoPost";

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
