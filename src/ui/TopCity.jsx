import { StyledBlockQoute, StyledImage, StyledParagraph } from "../ui/Carousel";
import styled from "styled-components";

const StyledTopCity = styled.div`
  display: flex;
  gap: 2rem;
  animation-name: moveIn;
  animation-duration: 5.5s;
  animation-delay: 1s;
  animation-iteration-count: infinite;
  z-index: -1;
  @keyframes moveIn {
    0% {
      transform: translate(-40px);
    }

    100% {
      transform: translate(0);
    }
  }
  &:hover {
    animation-play-state: paused;
  }
`;

function TopCity({ cities, index }) {
  return (
    <StyledTopCity>
      <StyledImage src={cities.at(index).cityImage} />
      <StyledBlockQoute>
        <StyledParagraph paragraphstyles={"large"}>
          {cities.at(index).cityName}
        </StyledParagraph>
        <StyledParagraph paragraphstyles={"large"}>
          {cities.at(index).description}
        </StyledParagraph>
      </StyledBlockQoute>
    </StyledTopCity>
  );
}

export default TopCity;
