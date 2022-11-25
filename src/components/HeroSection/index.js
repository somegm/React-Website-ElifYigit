import React from "react";
import video from "../../videos/video.mp4";
import { HeroContainer, HeroBg, VideoBg } from "./HeroElements";

const HeroSection = () => {
  /*const onHover = () => {
    setHover(!hover);
  }; */

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          autoPlay={true}
          playsInline ={true}
          webkit-playsInline={true}
          muted ={true}
          loop={true}
          preload={true}
          src={video}
        />
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;
