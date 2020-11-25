import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";

import Search from "../Search/Search";
import DisplayMap from "../DisplayMap/DisplayMap";
import DisplayMarker from "../Marker/Marker";
import Routing from "../Routing/Routing";
import DisplayPolyline from "../Polyline/Polyline";
import RouteSearch from "../RouteSearch/RouteSearch";

const NMap = () => {
  const position = [51.505, -0.09];
  const { latitude, longitude, coords } = useSelector((state) => ({
    ...state.SearchReducer,
  }));
  const dispatch = useDispatch();

  return (
    <div>
      <MapContainer
        center={{ lat: latitude, lng: longitude }}
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: "500px", height: "500px", margin: "auto" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DisplayMap />
        <DisplayMarker />
        <DisplayPolyline />
      </MapContainer>
      <div>
        <Search />
      </div>
      <div>
        <RouteSearch />
      </div>
      <div>
        <Routing />
      </div>
    </div>
  );
};

export default NMap;
