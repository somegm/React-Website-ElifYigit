import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaInstagram, FaBehance, FaLinkedinIn } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

import logo from "../../images/logo-son.png";

const toggleHome = () => {
  scroll.scrollToTop();
};

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper></FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              <img src={logo} style={{ width: 150 }} alt="logo" />{" "}
            </SocialLogo>
            <WebsiteRights>
              Elif Yiğit Karslı © {new Date().getFullYear()} All rights
              reserved.
            </WebsiteRights>
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
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
