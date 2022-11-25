import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesIconOne,
  ServicesIconTwo,
  ServicesIconThree,
  ServicesIconFour,
  ServicesH2,
  ServicesH3,
  ServicesP,
} from "./ServicesElements";
import Icon1 from "../../images/brand-01.png";
import Icon2 from "../../images/social-media1-01.png";
import Icon3 from "../../images/graphic design1-01.png";
import Icon4 from "../../images/web tasarım-01.png";
import Icon5 from "../../images/hareketli video-01.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";


AOS.init();

const Services = () => {
  const { t, i18n } = useTranslation();

  return (
    
    <>
      <ServicesContainer id="services">
        <ServicesH1>{t('servicesH')}</ServicesH1>
        <ServicesWrapper>
          <ServicesCard data-aos="fade-right">
          <ServicesH2>{t('servicesH1')}</ServicesH2>
          <ServicesH3>{t('servicesB1')}</ServicesH3>
          <ServicesH3>{t('servicesB2')}</ServicesH3>
          <ServicesH3>{t('servicesB3')}</ServicesH3>
            <ServicesIconOne src={Icon1} />
            <ServicesP></ServicesP>
          </ServicesCard>
          <ServicesCard data-aos="fade-right">
          <ServicesH2>{t('servicesH2')}</ServicesH2>
          <ServicesH3>{t('servicesS1')}</ServicesH3>
          <ServicesH3>{t('servicesS2')}</ServicesH3>
          <ServicesH3>{t('servicesS3')}</ServicesH3>
            <ServicesIconFour src={Icon2} />
            
            <ServicesP></ServicesP>
          </ServicesCard>
          <ServicesCard data-aos="fade-right">
          <ServicesH2>{t('servicesH3')}</ServicesH2>
          <ServicesH3>{t('servicesG1')}</ServicesH3>
          <ServicesH3>{t('servicesG2')}</ServicesH3>
          <ServicesH3>{t('servicesG3')}</ServicesH3>
          <ServicesH3>{t('servicesG4')}</ServicesH3>
            <ServicesIcon src={Icon3} />
            
            <ServicesP></ServicesP>
          </ServicesCard>
          <ServicesCard data-aos="fade-right">
          <ServicesH2>{t('servicesH4')}</ServicesH2>
          <ServicesH3>{t('servicesW1')}</ServicesH3>
          <ServicesH3>{t('servicesW2')}</ServicesH3>
          <ServicesH3>{t('servicesW3')}</ServicesH3>
          <ServicesH3>{t('servicesW4')}</ServicesH3>
          <ServicesH3>{t('servicesW5')}</ServicesH3>
          <ServicesH3>{t('servicesW6')}</ServicesH3>
            <ServicesIconTwo src={Icon4} />
            <ServicesP></ServicesP>
          </ServicesCard>
          <ServicesCard data-aos="fade-right" >
          <ServicesH2>{t('servicesH5')}</ServicesH2>
          <ServicesH3>{t('servicesM1')}</ServicesH3>
          <ServicesH3>{t('servicesM2')}</ServicesH3>
          <ServicesH3>{t('servicesM3')}</ServicesH3>
          <ServicesH3>{t('servicesM4')}</ServicesH3>

            <ServicesIconThree src={Icon5} />
            
            <ServicesP></ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
