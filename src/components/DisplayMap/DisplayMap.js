import React from 'react';
import { useMap } from 'react-leaflet';
import { useSelector } from 'react-redux';

const DisplayMap = () => {
    const { latitude, longitude} = useSelector(state => state.SearchReducer)
     const sMap = useMap();
      sMap.setView({lat: latitude, lng: longitude}, 13)
      return null
}

export default DisplayMap;