import React, { useState } from "react";
import styled from "styled-components";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { useNavigate } from "react-router-dom";

const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 100vh; /* Adjust height as needed */
  position: relative;
  overflow: hidden;
  & .leaflet-container {
    background-color: #f0f0f0; /* Change background color */
  }
  & .leaflet-control-zoom {
    /* Style zoom controls */
  }
  & .leaflet-control-layers {
    /* Style layer controls */
  }
`;

function PointsOfInterestMap() {
  const [mapPosition, setMapPostion] = useState([40, 0]);

  return (
    <StyledMapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <RegisterClick />
      <ChangeCenter position={mapPosition} />
    </StyledMapContainer>
  );
}

function RegisterClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) =>
      navigate(`destinationform?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

export default PointsOfInterestMap;
