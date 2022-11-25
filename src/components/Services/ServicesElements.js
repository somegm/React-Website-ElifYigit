import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #c13b3a 50%, white 50%);

  @media screen and (max-width: 768px) {
    height: auto;
  }
  @media screen and (max-width: 480px) {
    height: auto;
  }
`;
export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 13px;
  padding: 10px 10px;
  justify-content: space-evenly;
  flex-flow: row;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const ServicesCard = styled.div`
  background: white;
  display: relative;
  align-items: center;
  border-darius: 10px;
  max-height: 300px;
  max-width: 230px;
  padding: 1px;
  margin: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: auto) {
    max-width: 300px;
    max-height: 300px;
  }
`;

export const ServicesIcon = styled.img`
  height: 100px;
  width: 70px;
  margin: 50px 100px 300px 0px;
`;
export const ServicesIconOne = styled.img`
  height: 100px;
  width: 70px;
  margin: 80px 100px 100px 0px;
`;
export const ServicesIconTwo = styled.img`
  height: 100px;
  width: 70px;
  margin: 00px 100px 100px 0px;
`;
export const ServicesIconThree = styled.img`
  height: 100px;
  width: 70px;
  margin: 60px 100px 100px 0px;
`;
export const ServicesIconFour = styled.img`
  height: 100px;
  width: 70px;
  margin: 80px 100px 100px 0px;
`;

export const ServicesH1 = styled.h1`
  font-size: 60px;
  color: white;
  margin-bottom: 32px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin-top: 58px;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 20px;
  margin-top: 20px;
  margin-left: 10px;
  color: black;
`;
export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
export const ServicesH3 = styled.h3`
  font-size: 12px;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  color: black;
  font-weight: 400;
`;
