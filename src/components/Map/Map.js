import React, { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';

import DisplayMap from '../DisplayMap/DisplayMap';
import DisplayPolyline from '../Polyline/Polyline';
import EndMarker from '../EndMarker/EndMarker';
import StartMarker from '../StartMarker/StartMarker';
import Directions from '../Directions/Directions';
import { getCurrentLocation } from '../RouteSearch/RouteSearchAction';

const NMap = () => {
  const {
    latitude,
    longitude,
    coords,
    currentLocation,
    currentLatitude,
    currentLongitude,
    latCoord,
  } = useSelector((state) => ({
    ...state.SearchReducer,
    ...state.RouteSearch,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentLocation());
    console.log('map loaded');
  }, []);

  console.log(currentLocation);

  return (
    <div>
      <MapContainer
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: '500px', height: '500px', margin: 'auto' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DisplayMap />
        <DisplayPolyline />

        <div>
          <StartMarker />
          {latCoord ? <EndMarker /> : 'NO END MARKER SELECTED'}
        </div>
      </MapContainer>
      <div>
        <Directions />
      </div>
    </div>
  );
};

export default NMap;
