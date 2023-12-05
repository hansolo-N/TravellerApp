import React from "react";
import styled from "styled-components";

const StyledMainPage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1b1f22;
  justify-content: center;
`;

const Header = styled.h1`
  font-family: "Noto Color Emoji", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #ffc300;
  font-weight: 500;
  animation-name: slideIn;
  animation-duration: 3s;
  /* animation-delay: 1.5s; */
  animation-timing-function: ease-in-out;

  @keyframes slideIn {
    0% {
      transform: translateX(100px);
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }

    100% {
      transform: translatex(0);
      opacity: 1;
    }
  }
`;

const CountryFlag = styled.img`
  /* font-family: "Noto Color Emoji", sans-serif; */
  display: inline;
  margin-left: 0.2rem;
  padding: 1rem;
`;

function MainPage({ children }) {
  return <StyledMainPage>{children}</StyledMainPage>;
}

export default MainPage;

export { Header, CountryFlag };
