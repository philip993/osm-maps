import React from "react";
import { Polyline } from "react-leaflet";
import { useSelector } from "react-redux";

const DisplayPolyline = () => {
  const limeOptions = { color: "lime" };

  const { routeDirections } = useSelector((state) => ({
    ...state.RoutingReducer,
  }));

  return <Polyline pathOptions={limeOptions} positions={routeDirections} />;
};

export default DisplayPolyline;
