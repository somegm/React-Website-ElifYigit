import styled from "styled-components";

export const PortfolioContainer = styled.div`
height: auto;
width: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
overflow: hidden;

 @media screen and (max-width:768px){
     height: 1100px;
 }
 @media screen and (max-width:480px){
     height: 1300px;
 }
 `;
