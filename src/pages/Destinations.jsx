// Uses the same styles as Product
// import styles from "./Product.module.css";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";

import { Carousel } from "../ui/Carousel";
import React from "react";
import TopCityList from "../ui/TopCityList";

function Destinations() {
  return (
    <Carousel>
      <TopCityList />
      <Carousel.ArrowButton type="left" icon={<HiChevronLeft />} />
      <Carousel.ArrowButton type="right" icon={<HiChevronRight />} />
    </Carousel>
  );
}

export default Destinations;
