import React from 'react';
import { Polyline, Popup } from 'react-leaflet';
import { useSelector } from 'react-redux';

const DisplayPolyline = () => {
  const limeOptions = { color: 'lime' };

  const { routeDirections, routeDuration, routeLength } = useSelector(
    (state) => ({
      ...state.RoutingReducer,
    })
  );

  return (
    <Polyline pathOptions={limeOptions} positions={routeDirections}>
      <Popup>
        {routeDuration / 60} minutes
        <br />
        {(routeLength / 1000).toFixed(2)} KM
      </Popup>
    </Polyline>
  );
};

export default DisplayPolyline;
