import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './POIStyle.scss';
import {
  requestCreatePOISearch,
  selectCategoryFilter,
  clearCategoryFilter,
  toggleOptionsFalse,
  toggleOptionsTrue,
} from './POIActions';
import { Button } from 'react-bootstrap';
const POI = () => {
  const { poiObject, poiResult } = useSelector((state) => ({
    ...state.POIReducer,
  }));
  const dispatch = useDispatch();
  const handleSearchPOIs = () => {
    dispatch(requestCreatePOISearch());
    dispatch(toggleOptionsTrue());
  };
  const handleGetValue = (e) => {
    dispatch(selectCategoryFilter(e.target.value));
    console.log(e.target.value);
  };

  const handleToggleOptionsFalse = () => {
    dispatch(toggleOptionsFalse());
  };

  const handleClearFilter = () => {
    dispatch(clearCategoryFilter());
  };
  return (
    <div className="pois">
      <h1>POI</h1>
      <Button variant="dark" onClick={handleSearchPOIs}>
        Get POIs
      </Button>

      <div className="options" hidden={!poiResult}>
        <ul onClick={handleGetValue} className="left">
          <li value={395}>Hairdressers</li>
          <li value={192}>Bank</li>
          <li value={191}>ATM</li>
          <li value={570}>Restaurant</li>
          <li value={564}>Cafe</li>
        </ul>{' '}
        <ul onClick={handleGetValue} className="right">
          <li value={206}>Hospitals</li>
          <li value={518}>Supermakerts</li>
          <li value={298}>Casinos</li>
          <li value={604}>Station</li>
          <li value={135}>Churches</li>
        </ul>
        <div>
          <Button variant="dark" onClick={handleClearFilter}>
            Show All
          </Button>
        </div>
      </div>
    </div>
  );
};
export default POI;
