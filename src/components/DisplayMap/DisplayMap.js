import React from 'react';
import { useMap } from 'react-leaflet';
import { useSelector } from 'react-redux';

const DisplayMap = () => {
  const { currentLatitude, currentLongitude } = useSelector((state) => ({
    ...state.SearchReducer,
    ...state.RouteSearchReducer,
  }));

  const sMap = useMap();
  sMap.setView(
    {
      lat: currentLatitude,
      lng: currentLongitude,
    },
    13
  );
  return null;
};

export default DisplayMap;
