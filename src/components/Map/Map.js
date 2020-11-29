import React, { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";

import Search from "../Search/Search";
import DisplayMap from "../DisplayMap/DisplayMap";
import DisplayMarker from "../Marker/Marker";
import Routing from "../Routing/Routing";
import DisplayPolyline from "../Polyline/Polyline";
import RouteSearch from "../RouteSearch/RouteSearch";
import EndMarker from "../EndMarker/EndMarker";
import StartMarker from "../StartMarker/StartMarker";
import { getCurrentLocation } from "../RouteSearch/RouteSearchAction";
import Directions from "../Directions/Directions";

const NMap = () => {
  const position = [51.505, -0.09];
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
    console.log("map loaded");
  }, []);

  console.log(currentLocation);

  return (
    <div>
      <MapContainer
        // center={{ lat: latitude, lng: longitude }}
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: "500px", height: "500px", margin: "auto" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DisplayMap />
        {/* <DisplayMarker /> */}
        <DisplayPolyline />

        <div>
          <StartMarker />
          {latCoord ? <EndMarker /> : "NO END MARKER SELECTED"}
        </div>
      </MapContainer>
      <div>
        <Search />
        <Directions />
      </div>
      {/* <div>
        <RouteSearch />
      </div> */}
      <div>
        <Routing />
      </div>
    </div>
  );
};

export default NMap;
