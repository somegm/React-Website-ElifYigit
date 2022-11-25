import styled from "styled-components";

export const VideoContainer = styled.div`
height: auto;
width: auto;
display: flex;
flex-direction: column;
justify-content: center;
background-color: white;
overflow: hidden;

 @media screen and (max-width:768px){
     height: auto;
 }
 @media screen and (max-width:480px){
     height: auto;
 }
 `;

 export const VideoH1 = styled.h1`
font-size: 60px;
color: #c13b3a;
margin-bottom: 32px;
text-align: center;
margin-top: 100px;

 @media screen and (max-width: 480px){
     font-size: 2rem;
 }
`;

export const VideoWrapper = styled.div`
margin: 18px;
display: flex;
flex-direction: column;
align-items: center;
`;
