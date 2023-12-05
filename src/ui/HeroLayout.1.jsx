import React from "react";
import {
  StyledLayout,
  Sidebar,
  Header,
  StyledParagraph,
  ImageContainer,
  Images,
  Image,
} from "./HeroLayout";

export function HeroLayout() {
  return (
    <StyledLayout>
      <Sidebar>
        <div>
          <Header>About</Header>
        </div>
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
