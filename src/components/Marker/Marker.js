import React from "react";
import { Marker, Popup, useMapEvent } from "react-leaflet";
import { useSelector } from "react-redux";

const DisplayMarker = () => {
  const { latitude, longitude, searchObject } = useSelector((state) => ({
    ...state.SearchReducer,
  }));

  const coords = [];
  coords.push(latitude, longitude);

  return (
    <Marker position={coords}>
      <Popup>
        {searchObject.map(({ display_name }) => (
          <h4>{display_name}</h4>
        ))}
      </Popup>
    </Marker>
  );
};

export default DisplayMarker;
