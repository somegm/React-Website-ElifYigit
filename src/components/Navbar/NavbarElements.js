import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#c13b3a" : "black")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 5px;
  max-width: 1100px;
  background: transparent;
`;
export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 0px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  color: white;

  &.active {
    border-bottom: 6px solid white;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and(max-width 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const NavH1 = styled.h1`
  font-size: 14px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  margin: auto;
  align-items: center;

  &.active {
    color: #c13b3a;
  }
`;
export const NavH2 = styled.h2`
  font-size: 14px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  margin-left: 10px;
  align-items: center;

  &.active {
    color: #c13b3a;
    font-weight: 800;
  }
`;

export const NavTypeContainer = styled.nav`
display: flex;
align-items: center;
margin: auto;
margin-left: 150px;

@media screen and(max-width: 980px) {
  display: none;
}
`
export const NavTypeContainer2 = styled.div`
display: none;

  @media screen and (max-width: 980px) {
    display: flex;
    align-items: center;
    flex-direction: inherit;
  }
`

export const SocialMediaWrap = styled.div`
display: flex;
align-items: center;
margin-left: 50px;


 @media screen and (max-width: 768px){
     flex-direction: column;
 }

`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 150px;
  margin-left: 0px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 20px;
`;
