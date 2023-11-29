import React from "react";
import { useEffect, useState } from "react";
import Button from "./Button";
import BackButton from "./BackButton";
import { useUrlCoordinates } from "../hooks/useUrlCoordinates";
import Message from "./Message";
import { useNavigate } from "react-router-dom";
import Form from "../ui/Form";

function DestinationForm() {
  const navigate = useNavigate();
  const [lat, lng] = useUrlCoordinates();
  const [isLoadingGeoData, setIsLoadingGeoData] = useState(false);
  const [geoLocationError, setGeoLocationError] = useState("");

  const baseUrl = "https://api.bigdatacloud.net/data/reverse-geocode-client";
  // const {postCity,isLoading} = useCities()

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/app/cities");
  }

  if (geoLocationError) {
    return <Message message={geoLocationError} />;
  }

  if (!lat && !lng) {
    return <Message message={"click somewhere on the map"} />;
  }
  return (
    <Form>
      <h1>hello</h1>
    </Form>
  );
}

export default DestinationForm;
