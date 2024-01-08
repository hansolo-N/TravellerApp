import React from "react";
import DestinationSidebar from "../components/DestinationSidebar";
import DestinationNav, { ListItem } from "../ui/DestinationNav";
import { HiOutlineGlobe } from "react-icons/hi";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import styled from "styled-components";
import Logo from "../components/Logo";
import { Link, Outlet } from "react-router-dom";
import Destinations from "./Destinations";
import MainPage from "../ui/MainPage";
import { Header } from "../ui/MainPage";

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
        <DestinationNav>
          <ListItem
            link="flights"
            linkname="flights"
            icon={<HiOutlinePaperAirplane />}
          />

          <ListItem
            link="topcities"
            linkname="Top-Cities"
            icon={<HiOutlineGlobe />}
          />
        </DestinationNav>
      </DestinationSidebar>
      <MainPage>
        <Header>Destinations 🌍</Header>
        <Outlet />
        {/* <Destinations /> */}
      </MainPage>
    </StyledLayout>
  );
}

export default DestinationLayout;
