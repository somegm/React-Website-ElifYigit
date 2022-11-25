import React from "react";
import { VideoContainer, VideoH1, VideoWrapper } from "./VideoPageElements";
import video from "../../videos/anneler-gunu.mp4";
import video2 from "../../videos/banner-sunum.mp4";
import video3 from "../../videos/elif-sosyal.mp4";
import video4 from "../../videos/ihracat-pluskim.mp4";
import "../VideoPage/videostyle.scss";
import "../Portfolio/style.scss";
import placeholder1 from "../../images/video1.png";
import placeholder2 from "../../images/video2.png";
import placeholder3 from "../../images/video3.png";
import placeholder4 from "../../images/video4.png";
import { useTranslation } from "react-i18next";
const VideoPage = () => {
  const {t} = useTranslation();
  
  return (
    <>
      <VideoContainer id="videopg">
        <VideoH1> {t('videoH1')}</VideoH1>
        <VideoWrapper>
          <div className="portfolio">
            <div className="container">
              <video
                width="480"
                height="480"
                controls="controls"
                poster={placeholder1}
                className="videoBG"
              >
                <source src={video} type="video/mp4" />
              </video>
              <video
                width="480"
                height="480"
                controls="controls"
                poster={placeholder2}
                className="videoBG"
              >
                <source src={video2} type="video/mp4" />
              </video>
              <video
                width="480"
                height="480"
                controls="controls"
                poster={placeholder3}
                className="videoBG"
              >
                <source src={video3} type="video/mp4" />
              </video>
              <video
                width="480"
                height="480"
                controls="controls"
                poster={placeholder4}
                className="videoBG"
              >
                <source src={video4} type="video/mp4" />
              </video>
            </div>
          </div>
        </VideoWrapper>
      </VideoContainer>
    </>
  );
};

export default VideoPage;
