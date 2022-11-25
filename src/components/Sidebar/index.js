import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SocialIconLink,
  SocialIcons,
  SocialMediaWrap,

  
} from "./SidebarElements";
import { FaFacebook, FaInstagram, FaBehance , FaLinkedinIn} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Sidebar = ({ isOpen, toggle }) => {
  const { t} = useTranslation();
  return (
    
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
          {t('navbar1')}
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
          {t('navbar2')}
          </SidebarLink>
          <SidebarLink to="portfolio" onClick={toggle}>
          {t('navbar3')}
          </SidebarLink>
          <SidebarLink to="videopg" onClick={toggle}>
          {t('navbar4')}
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
          {t('navbar5')}
          </SidebarLink>
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
          
    
  
        </SidebarMenu>
        <SideBtnWrap>
          
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
