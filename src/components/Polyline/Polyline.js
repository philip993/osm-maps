import React from "react";
import { Polyline, Popup } from "react-leaflet";
import { useSelector } from "react-redux";

const DisplayPolyline = () => {
  const limeOptions = { color: "lime" };

  const { routeDirections, routeDuration, routeLength } = useSelector(
    (state) => ({
      ...state.RoutingReducer,
    })
  );

  return (
    <Polyline pathOptions={limeOptions} positions={routeDirections}>
      <Popup>
        {routeDuration / 60}
        {routeLength}
      </Popup>
    </Polyline>
  );
};

export default DisplayPolyline;
