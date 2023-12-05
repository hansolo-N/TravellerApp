import React from "react";
import styled, { css } from "styled-components";

const StyledLayout = styled.div`
  padding: 2rem;
  height: 600px;
  width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 0.2rem;
`;

const Header = styled.h1`
  font-size: 48px;
  font-weight: 800;
`;

const Button = styled.button`
  border: 1px none;
  border-radius: 5px;
  background-color: orange;
  width: 150px;
  height: 35px;
  font-size: 11px;
  font-weight: 900;
  padding: 0 0.2rem;

  ${(props) =>
    props.type === "orange" &&
    css`
      background-color: orange;
      color: white;
    `}
`;
const ImageContainer = styled.div`
  height: 800px;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Images = styled.div`
  width: 650px;
  height: 650px;
  position: relative;
`;

const Image = styled.img`
  border-radius: 50%;
  border: 2px solid white;
  position: absolute;
  ${(props) =>
    props.type === 0 &&
    css`
      z-index: 2;
      max-height: 200px;
      max-width: 200px;
      left: -30px;
      top: -40px;
    `}
  ${(props) =>
    props.type === 1 &&
    css`
      z-index: 2;
      max-height: 150px;
      max-width: 150px;
      left: 90px;
      bottom: 150px;
    `}

    ${(props) =>
    props.type === 2 &&
    css`
      z-index: 0;
      top: 0px;
      right: 130px;
      max-height: 400px;
      max-width: 400px;
      box-shadow: 10px 4px 4px salmon;
    `}
`;

const StyledParagraph = styled.p`
  font-size: 12px;
  display: flex;
  justify-content: center;
  text-align: center;

  ${(props) =>
    props.type === "primary" &&
    css`
      color: aliceblue;
      font-weight: 500;
    `}
`;

const Sidebar = styled.div`
  height: 650px;
  width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

function HeroLayout() {
  return (
    <StyledLayout>
      <Sidebar>
        <Header>About</Header>
        <StyledParagraph type="primary">
          Dust off those travel memories! "Traveller" isn't your grandma's photo
          album. It's your personal portal to relive adventures, rediscover
          hidden gems, and curate a travelogue that sparks joy (and maybe
          inspires your next escape!). Map your journeys, pin unforgettable
          moments, and let Traveller be your digital passport to a world of
          memories. It's your adventure, your way😁✈️
        </StyledParagraph>
      </Sidebar>
      <ImageContainer>
        <Images>
          <Image src="fabio-comparelli-uq2E2V4LhCY-unsplash.jpg" type={1} />
          <Image src="ian-dooley-hpTH5b6mo2s-unsplash.jpg" type={0} />
          <Image src="tom-barrett-M0AWNxnLaMw-unsplash.jpg" type={2} />
        </Images>
      </ImageContainer>
    </StyledLayout>
  );
}

export default HeroLayout;
