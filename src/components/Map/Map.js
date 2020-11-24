import React from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import Search from "../Search/Search";

const NMap = () => {
  const position = [51.505, -0.09];
  return (
    <div>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: "500px", height: "500px", margin: "auto" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <div>
        <Search />
      </div>
    </div>
  );
};

export default NMap;
