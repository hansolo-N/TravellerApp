import React from "react";
import DestinationSidebar from "../components/DestinationSidebar";
import PointsOfInterestMap from "../ui/PointsOfInterestMap";
import styled from "styled-components";

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

function DestinationLayout() {
  return (
    <StyledLayout>
      <DestinationSidebar />
      <PointsOfInterestMap />
    </StyledLayout>
  );
}

export default DestinationLayout;
