import React from "react";
import BodyMiddleLayout from "../../GlobalComponents/BodyLayout/BodyMiddleLayout";
import Container from "../../GlobalComponents/BodyLayout/Container";
import About from ".";
import Friends from "../Friends";
import ParsonalInfo from "./ParsonalInfo";
import AboutMiddleContent from "./AboutMiddleContent";

const AboutPage = () => {
  return (
    <>
      <div className="bg-white02">
        <BodyMiddleLayout />
        <Container>
          <div className="grid grid-cols-[.8fr_2fr_.6fr] gap-x-4 mt-8">
            <div>
              <About />
              <ParsonalInfo />
            </div>
            <div>
              <AboutMiddleContent />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AboutPage;
