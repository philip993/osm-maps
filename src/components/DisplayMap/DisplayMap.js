import React from 'react';
import { useMap } from 'react-leaflet';
import { useSelector } from 'react-redux';

const DisplayMap = () => {
  const {
    currentLatitude,
    currentLongitude,
    latCoord,
    lngCoord,
    routePosition,
    poiPosition,
  } = useSelector((state) => ({
    ...state.SearchReducer,
    ...state.RouteSearchReducer,
    ...state.RoutingReducer,
    ...state.POIReducer,
  }));

  const sMap = useMap();
  sMap.setView(
    {
      lat:
        !routePosition && !poiPosition
          ? currentLatitude
          : routePosition && !poiPosition
          ? currentLatitude
          : !routePosition && poiPosition
          ? latCoord
          : currentLatitude,
      lng:
        !routePosition && !poiPosition
          ? currentLongitude
          : routePosition && !poiPosition
          ? currentLongitude
          : !routePosition && poiPosition
          ? lngCoord
          : currentLongitude,
    },
    13
  );
  return null;
};

export default DisplayMap;
