import React from "react";
import { Marker, Popup, useMapEvent } from "react-leaflet";
import { useSelector } from "react-redux";

const EndMarker = () => {
  const {
    endPointLat,
    endPointLon,
    searchObject,
    latCoord,
    lngCoord,
  } = useSelector((state) => ({
    ...state.RouteSearchReducer,
    ...state.RoutingReducer,
    ...state.SearchReducer,
  }));

  const coords = [];
  coords.push(latCoord, lngCoord);

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

export default EndMarker;
