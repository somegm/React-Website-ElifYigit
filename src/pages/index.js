import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import Footer from "../components/Footer";
import Services from "../components/Services/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import { useEffect } from "react";
import VideoPG from "../components/VideoPage"
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState({
    category: "tumu",
    subCategory: "tumu",
  });

  useEffect(() => {
    setFilter((filtered) => ({
      ...filtered,
      subCategory: list.find((el) => el.id === filter.category).sub[0].id,
    }));
  }, [filter.category]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  var titleM =  <p>{t('portfolioS1')}</p>
  var titleM1=  <p>{t('portfolioS2')}</p>
  var titleM2 =  <p>{t('portfolioS3')}</p>
  var titleM3 =  <p>{t('portfolioS4')}</p>
  var titleM4 =  <p>{t('portfolioS5')}</p>
  var titleM5 =  <p>{t('portfolioS6')}</p>
  const list = [
    {
      id: "tumu",
      title: titleM,
      sub: [
        {
          id:"mix",
        }
      ]
    },
    {
      id: "branding",
      title: titleM1,
      sub: [
        {
          id: "olva",
          title: "Olva",
            
        },
        {
          id: "healtea",
          title: "Healtea",
            
        },
        {
          id: "oggi",
          title: "Oggi",
            
        },   
        {
          id: "inovas",
          title:"Gastronovas-Inovas",
            
        },
        {
          id: "sadem",
          title: "Sadem",
            
        },
        {
          id: "minio",
          title: "Minio",
            
        },         
      ],
    },
    {
      id: "web",
      title: titleM2,
      sub: [
        {
          id: "web",
          title: "",
        },
        
      ],
    },
    {
      id: "sosyal",
      title:  titleM3,
      sub: [
        {
          id: "sosyal",
          title: "",
        },
        
      ],
    },
    {
      id: "grafik",
      title: titleM4,
      sub: [
        {
          id: "grafik",
          title: "",
        },
        
      ],
    },
    {
      id: "logo",
      title:titleM5,
      sub: [
        {
          id: "logo",
          title: "",
        },
        
      ],
    },
    
    
  ];
  

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Services />
      <Portfolio filter={filter} setFilter={setFilter} list={list} />
      <VideoPG />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
