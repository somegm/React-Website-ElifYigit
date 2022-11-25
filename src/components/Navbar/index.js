import React, { useEffect, useState } from "react";
import logo from "../../images/logo-son.png";
import { IconContext } from "react-icons/lib";
import { FaFacebook, FaInstagram, FaBehance, FaLinkedinIn } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  SocialIconLink,
  SocialIcons,
  SocialMediaWrap,
  NavH1,
  NavH2,
  NavTypeContainer,
  NavTypeContainer2,
} from "./NavbarElements";
import { useTranslation } from "react-i18next";
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const { t, i18n } = useTranslation();
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
 
  

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <img src={logo} style={{ width: 200, marginTop: 0 }} alt="logo" />
            </NavLogo>

            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavTypeContainer2>
              <NavH1 onClick={() => handleClick('tr')}>TR</NavH1>
              <NavH2 onClick={() => handleClick('en')}>EN</NavH2>
            </NavTypeContainer2>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                   {t('navbar1')}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                   {t('navbar2')}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="portfolio"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {t('navbar3')}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="videopg"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                   {t('navbar4')}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {t('navbar5')}
                </NavLinks>
              </NavItem>
              
              <NavTypeContainer>
                <NavH1 onClick={() => handleClick('tr')}>TR</NavH1>
                <NavH2 onClick={() => handleClick('en')}>EN</NavH2>
              </NavTypeContainer>
              <SocialMediaWrap>
                <SocialIcons>
                  <SocialIconLink
                    href="https://www.facebook.com/elifyigitofficial/"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </SocialIconLink>

                  <SocialIconLink
                    href="https://instagram.com/elifyigitofficial"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </SocialIconLink>
                  <SocialIconLink
                    href="https://www.behance.net/eliffyigit7657/projects"
                    target="_blank"
                    aria-label="Behance"
                  >
                    <FaBehance />
                  </SocialIconLink>
                  <SocialIconLink
                    href="https://www.linkedin.com/in/elif-yi%C4%9Fit-bb681717a"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </SocialIconLink>
                </SocialIcons>
              </SocialMediaWrap>
            </NavMenu>
            <NavBtn></NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};
export default Navbar;
