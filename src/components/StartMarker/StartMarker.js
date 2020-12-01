import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { useSelector } from 'react-redux';

const StartMarker = () => {
  const { currentLatitude, currentLongitude } = useSelector((state) => ({
    ...state.RouteSearchReducer,
  }));

  let coords = [];
  coords.push(currentLatitude, currentLongitude);
  return (
    <div>
      <Marker position={coords}>
        <Popup>
          {/* {startObject.map(({ display_name }) => (
            <h4>{display_name}</h4>
          ))} */}{' '}
          START
        </Popup>
      </Marker>
    </div>
  );
};

export default StartMarker;
