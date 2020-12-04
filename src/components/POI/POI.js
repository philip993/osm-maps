import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestCreatePOISearch } from './POIActions';

const POI = () => {
  const { poiObject } = useSelector((state) => ({
    ...state.POIReducer,
  }));
  const dispatch = useDispatch();
  const handleSearchPOIs = () => {
    dispatch(requestCreatePOISearch());
  };

  return (
    <div>
      <h1>POI</h1>
      <button onClick={handleSearchPOIs}>Get POIs</button>
    </div>
  );
};
export default POI;
