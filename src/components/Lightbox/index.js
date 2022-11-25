/* eslint-disable no-undef */
import React, { useState } from "react";
import styled from "styled-components";

const StyledLightboxWrapper = styled.div`
  display: inline-block;
  width: fit-content;
  height: fit-content;

  img:first-of-type {
    position: relative;

    ::after {
      position: absolute;
      top: 0;
      left: 0;
      background: red;
      height: 100%;
      width: 100%;
      display: flex;
      jusitfy-content: center;
      align-items: center;
      content: "";
      z-index: 2000;
    }
  }
`;

const StyledLightboxDisplay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background: rgba(0, 0, 0, 0.4);

  img {
    z-index: 1000;
    height: calc(100vh - 100px);
    object-fit: contain;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%);
    color: #ffffff;
    font-weight: 700;
    font-size: 48px;
    opacity: 0.6;
    cursor: pointer;

    background: none;
    outline: none;
    border: none;
  }
`;

const Lightbox = ({
  src,
  thumbnail = src,
  width = 120,
  height = "auto",
  alt = "thumbnail",
  title = "Image",
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = (e) => {
    e.stopPropagation();
    setIsOpen((open) => !open);
  };

  return (
    <StyledLightboxWrapper title={title} onClick={() => setIsOpen(true)} className={className}>
      <img src={thumbnail} alt={alt} width={width} height={height} />
      {isOpen && (
        <StyledLightboxDisplay>
          <img src={src} alt={thumbnail} />
          <button onClick={toggleOpen}>x</button>
        </StyledLightboxDisplay>
      )}
    </StyledLightboxWrapper>
  );
};

export default Lightbox;
