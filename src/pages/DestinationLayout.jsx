import React from "react";
import DestinationSidebar from "../components/DestinationSidebar";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import PointsOfInterestMap from "../ui/PointsOfInterestMap";
import Carousel, {
  StyledBlockQoute,
  StyledImage,
  StyledParagraph,
} from "../ui/Carousel";
import styled from "styled-components";
import Logo from "../components/Logo";
import { Outlet } from "react-router-dom";

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
`;

function DestinationLayout() {
  return (
    <StyledLayout>
      <DestinationSidebar>
        <Logo />
        <Outlet />
      </DestinationSidebar>
      {/* <PointsOfInterestMap /> */}
      <Carousel>
        <StyledImage src="bg.jpg" alt="image not found" />
        <StyledBlockQoute>
          <StyledParagraph>test</StyledParagraph>
          <StyledParagraph>test</StyledParagraph>
        </StyledBlockQoute>
        <Carousel.ArrowButton type="left" icon={<HiChevronLeft />} />
        <Carousel.ArrowButton type="right" icon={<HiChevronRight />} />
      </Carousel>
    </StyledLayout>
  );
}

export default DestinationLayout;
