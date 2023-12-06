import { StyledBlockQoute, StyledImage, StyledParagraph } from "../ui/Carousel";
import styled, { css } from "styled-components";
import { CountryFlag } from "./MainPage";

const StyledTopCity = styled.div`
  display: flex;
  gap: 3rem;
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

const Fact = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  ${(props) =>
    props.type === "bottom" &&
    css`
      &:hover {
        transform: scale(1.1) translateX(90px) translateY(50px);
        cursor: pointer;
        font-size: 16px;
        z-index: 4;
        color: red;
        backdrop-filter: blur(4px);
      }
    `}
`;

const Emoji = styled.span`
  font-family: "Noto Color Emoji", sans-serif;
  display: inline;
  margin-left: 0.2rem;
  padding: 1rem;
`;

function TopCity({ cities, index }) {
  return (
    <StyledTopCity>
      <StyledImage src={cities.at(index).cityImage} />
      <StyledBlockQoute>
        <StyledParagraph paragraphstyles={"large"}>
          {cities.at(index).cityName}
          <CountryFlag src={cities.at(index).emoji} />
        </StyledParagraph>
        <StyledParagraph paragraphstyles="medium" type="middle">
          {cities.at(index).description}
        </StyledParagraph>
        <Fact type="bottom">
          <StyledParagraph paragraphstyles={"large"}>
            Fact
            <Emoji>🧠</Emoji>
          </StyledParagraph>
          <StyledParagraph paragraphstyles={"medium"} type="bottom">
            {cities.at(index).Fact}
          </StyledParagraph>
        </Fact>
      </StyledBlockQoute>
    </StyledTopCity>
  );
}

export default TopCity;
