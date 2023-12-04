import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
  line-height: 1.5;
  margin-top: 48px;
`;

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledListItem = styled.li`
  font-size: 18px;
  padding: 5px;
  color: white;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: all 1s ease-in-out;
  border-radius: 5px;
  transform: translate(-30px);
  /* animation-name: moveInLeft;
  animation-duration: 5s; */

  /* @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translate(-100px);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  } */

  &:hover {
    transform: translateY(1px);
    transform: translateX(0);
    background-color: #00c46a;
  }
`;

function ListItem({ link, linkname, icon }) {
  return (
    <StyledListItem>
      <NavLink to={link}>
        <StyledSpan>
          {linkname}
          {icon}
        </StyledSpan>
      </NavLink>
    </StyledListItem>
  );
}

function DestinationNav({ children }) {
  return (
    <Nav>
      <List>{children}</List>
    </Nav>
  );
}

export default DestinationNav;

export { ListItem };
