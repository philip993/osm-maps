import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MapStyle.scss';
import { MapContainer, TileLayer } from 'react-leaflet';
import { getCurrentLocation } from '../RouteSearch/RouteSearchAction';

import DisplayMap from '../DisplayMap/DisplayMap';
import DisplayPolyline from '../Polyline/Polyline';
import EndMarker from '../EndMarker/EndMarker';
import StartMarker from '../StartMarker/StartMarker';
import Directions from '../Directions/Directions';
import Circle from '../Circle/Circle';

const NMap = () => {
  const { currentLocation, latCoord } = useSelector((state) => ({
    ...state.SearchReducer,
    ...state.RoutingReducer,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentLocation());
    console.log('map loaded');
  }, []);

  console.log(currentLocation);

  return (
    <div className="map">
      <MapContainer className="mapContainer" zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DisplayMap />
        <DisplayPolyline />
        <Circle />
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
