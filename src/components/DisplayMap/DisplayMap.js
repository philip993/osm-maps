import React from "react";
import { useMap } from "react-leaflet";
import { useSelector } from "react-redux";

const DisplayMap = () => {
  const { currentLatitude, currentLongitude, latCoord, lngCoord } = useSelector(
    (state) => ({
      ...state.SearchReducer,
      ...state.RouteSearchReducer,
    })
  );

  const sMap = useMap();
  sMap.setView(
    // {
    //   lat: !latCoord ? currentLatitude : latCoord,
    //   lng: !lngCoord ? currentLongitude : lngCoord,
    // },
    {
      lat: currentLatitude,
      lng: currentLongitude,
    },
    13
  );
  return null;
};

export default DisplayMap;
