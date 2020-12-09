import {
  SUCCESS_CREATE_POI_SEARCH,
  FAILURE_CREATE_POI_SEARCH,
  SELECT_CATEGORY_FILTER,
  CLEAR_CATEGORY_FILTER,
  TOGGLE_OPTIONS_TRUE,
  TOGGLE_OPTIONS_FALSE,
  POI_MODAL_VISIBLE,
  POI_MODAL_NOT_VISIBLE,
} from './POIActionTypes';
import axios from 'axios';

export const requestCreatePOISearch = () => {
  return (dispatch, getState) => {
    let { searchObject, latCoord, lngCoord } = getState().SearchReducer;
    let bx0 = parseFloat(searchObject[0].boundingbox[0]);
    let bx1 = parseFloat(searchObject[0].boundingbox[2]);
    let bx2 = parseFloat(searchObject[0].boundingbox[1]);
    let bx3 = parseFloat(searchObject[0].boundingbox[3]);
    let coords = [];
    let bxX = [];
    let bxZ = [];
    bxX.push(bx1, bx0);
    bxZ.push(bx3, bx2);
    coords.push(parseFloat(lngCoord), parseFloat(latCoord));
    console.log(coords);
    return axios
      .post(
        `https://api.openrouteservice.org/pois/?api_key=5b3ce3597851110001cf624814771ee0ac454870b5974cb43f300fed`,
        {
          request: 'pois',
          geometry: {
            bbox: [bxZ, coords],
            geojson: {
              type: 'Point',
              coordinates: coords,
            },
            buffer: 1000,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_CREATE_POI_SEARCH,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        console.error(err);
        dispatch({
          type: FAILURE_CREATE_POI_SEARCH,
        });
      });
  };
};

export const selectCategoryFilter = (e) => {
  return {
    type: SELECT_CATEGORY_FILTER,
    payload: e,
  };
};

export const clearCategoryFilter = () => {
  return {
    type: CLEAR_CATEGORY_FILTER,
  };
};

export const toggleOptionsTrue = () => {
  return {
    type: TOGGLE_OPTIONS_TRUE,
  };
};

export const toggleOptionsFalse = () => {
  return {
    type: TOGGLE_OPTIONS_FALSE,
  };
};

export const poiModalVisible = () => {
  return {
    type: POI_MODAL_VISIBLE,
  };
};

export const poiModalNotVisible = () => {
  return {
    type: POI_MODAL_NOT_VISIBLE,
  };
};
