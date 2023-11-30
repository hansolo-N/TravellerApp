import React from "react";
import DestinationSidebar from "../components/DestinationSidebar";
import DestinationNav, { ListItem } from "../ui/DestinationNav";
import { HiOutlineGlobe } from "react-icons/hi";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import styled from "styled-components";
import Logo from "../components/Logo";
import { NavLink, Outlet } from "react-router-dom";
import Destinations from "./Destinations";

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 200px 2fr;
  height: 100vh;
`;

function DestinationLayout() {
  return (
    <StyledLayout>
      <DestinationSidebar>
        <Logo />
        <Outlet />
        <DestinationNav>
          <ListItem linkname="flights" icon={<HiOutlinePaperAirplane />} />
          <ListItem linkname="Destinations" icon={<HiOutlineGlobe />} />
        </DestinationNav>
      </DestinationSidebar>

      <DestinationSidebar>
        <Destinations />
      </DestinationSidebar>
    </StyledLayout>
  );
}

export default DestinationLayout;
