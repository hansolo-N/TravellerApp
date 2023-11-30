import React, { useContext } from "react";
import { StyledBlockQoute, StyledImage, StyledParagraph } from "../ui/Carousel";

function TopCity({ cities, index }) {
  return (
    <>
      <StyledImage src={cities.at(index).cityImage} />
      <StyledBlockQoute>
        <StyledParagraph paragraphstyles={"large"}>
          {cities.at(index).cityName}
        </StyledParagraph>
        <StyledParagraph paragraphstyles={"large"}>
          {cities.at(index).description}
        </StyledParagraph>
      </StyledBlockQoute>
    </>
  );
}

export default TopCity;
