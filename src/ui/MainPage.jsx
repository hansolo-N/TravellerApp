import React from "react";
import styled from "styled-components";

const StyledMainPage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0d9da;
  justify-content: center;
`;

const Header = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #ffc300;
  font-weight: 500;
`;

function MainPage({ children }) {
  return <StyledMainPage>{children}</StyledMainPage>;
}

export default MainPage;

export { Header };
