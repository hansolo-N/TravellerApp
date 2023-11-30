// Uses the same styles as Product
// import styles from "./Product.module.css";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import Carousel, {
  StyledBlockQoute,
  StyledImage,
  StyledParagraph,
} from "../ui/Carousel";

import React from "react";

function Destinations() {
  return (
    <Carousel>
      <StyledImage src="bg.jpg" alt="image not found" />
      <StyledBlockQoute>
        <StyledParagraph>test</StyledParagraph>
        <StyledParagraph>test</StyledParagraph>
      </StyledBlockQoute>
      <Carousel.ArrowButton type="left" icon={<HiChevronLeft />} />
      <Carousel.ArrowButton type="right" icon={<HiChevronRight />} />
    </Carousel>
  );
}

export default Destinations;
