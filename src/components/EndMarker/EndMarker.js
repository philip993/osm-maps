import React from "react";
import { Marker, Popup, useMapEvent } from "react-leaflet";
import { useSelector } from "react-redux";

const EndMarker = () => {
  const { endPointLat, endPointLon, endObject } = useSelector((state) => ({
    ...state.RouteSearchReducer,
  }));

  const coords = [];
  coords.push(endPointLat, endPointLon)

  return (
    <Marker position={coords}>
      <Popup>
        {endObject.map(({ display_name }) => (
          <h4>{display_name}</h4>
        ))}
      </Popup>
    </Marker>
  );
};

export default EndMarker;
