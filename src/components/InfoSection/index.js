import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Prop,
  Subtitle,
  ImgWrap,
  Img,
} from "./InfoElements";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";

AOS.init();

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  lightText,
  headline,
  darkText,
  description,
  img,
  alt,
  prop,
}) => {
  const {t} = useTranslation();

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                
                <Heading lightText={lightText}> {t('info2')}</Heading>
                <Prop lightText={lightText}> {t('info3')}</Prop>
                <Subtitle darkText={darkText}>  {t('info1')}</Subtitle>
                
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img data-aos="fade-down" src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer >
    </>
  );
};

export default InfoSection;

