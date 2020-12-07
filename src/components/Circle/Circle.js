import React from 'react';
import { useSelector } from 'react-redux';
import { CircleMarker, Marker, Popup } from 'react-leaflet';

const Circle = () => {
  const { poiPlaces, poiSearchCategory } = useSelector((state) => ({
    ...state.POIReducer,
  }));

  const colors = { color: 'red' };

  return (
    <div>
      {!poiPlaces
        ? ''
        : poiPlaces
            .filter(
              poiSearchCategory === ''
                ? (s) => s
                : (s) => s.properties.category_ids[poiSearchCategory]
            )
            .map((t, ind) => (
              // <CircleMarker
              //   key={ind}
              //   center={centerCoords}
              //   radius={10}
              //   pathOptions={colors}
              // >
              <Marker position={t.geometry.coordinates.map((s) => s).reverse()}>
                <Popup>
                  {ind}.{t.properties.osm_tags.name}
                </Popup>
              </Marker>

              // </CircleMarker>
            ))}
    </div>
  );
};

export default Circle;
