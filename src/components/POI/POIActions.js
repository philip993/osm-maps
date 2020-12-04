import {
  SUCCESS_CREATE_POI_SEARCH,
  FAILURE_CREATE_POI_SEARCH,
} from './POIActionTypes';
import axios from 'axios';

export const requestCreatePOISearch = () => {
  return (dispatch, getState) => {
    return axios
      .post(
        `https://api.openrouteservice.org/pois/?api_key=5b3ce3597851110001cf624814771ee0ac454870b5974cb43f300fed`,
        {
          request: 'pois',
          geometry: {
            bbox: [
              [8.8034, 53.0756],
              [8.7834, 53.0456],
            ],
            geojson: {
              type: 'Point',
              coordinates: [8.8034, 53.0756],
            },
            buffer: 200,
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
        dispatch({
          type: FAILURE_CREATE_POI_SEARCH,
        });
      });
  };
};
