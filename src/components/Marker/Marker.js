import React from "react";
import { Marker, Popup, useMapEvent } from "react-leaflet";
import { useSelector } from "react-redux";

const DisplayMarker = () => {
  const {
    latitude,
    longitude,
    searchObject,
    currentLocation,
    currentLatitude,
    currentLongitude,
    latCoord,
    lngCoord,
  } = useSelector((state) => ({
    ...state.SearchReducer,
    ...state.RouteSearchReducer,
  }));

  const coords = [];
  coords.push(latCoord, lngCoord);
  console.log(coords);

  return (
    <div>
      {currentLatitude === "" && currentLongitude === "" ? (
        "No marker"
      ) : (
        <Marker position={coords}>
          <Popup>
            {searchObject.map(({ display_name }) => (
              <h4>{display_name}</h4>
            ))}
          </Popup>
        </Marker>
      )}
    </div>
  );
};

export default DisplayMarker;
