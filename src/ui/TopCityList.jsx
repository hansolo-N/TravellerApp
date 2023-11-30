import React, { useContext } from "react";
import { useFetchTopCities } from "../hooks/useFetchTopCities";
import { useCarousel } from "./Carousel";
import Spinner from "../components/Spinner";
import TopCity from "./TopCity";

function TopCityList() {
  const { Cities, loadingCities } = useFetchTopCities();

  const context = useCarousel();

  const index = context.index;

  if (loadingCities) return <Spinner />;

  return Cities && <TopCity cities={Cities} index={index} />;
}

export default TopCityList;
