import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

const Map = () => {
 

    return (
        <div>
        <MapContainer center={[51.505, -0.09]} zoom={12} scrollWheelZoom={false}>
            <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[51.505, -0.09]}></Marker>
        </MapContainer>
        </div>
    )
}

export default Map;