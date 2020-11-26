import { FAILURE_GET_END_POINT, FAILURE_GET_START_POINT, GET_CURRENT_LOCATION, INPUT_SEARCH_END_POINT, INPUT_SEARCH_START_POINT, SUCCESS_GET_END_POINT, SUCCESS_GET_START_POINT } from './RouteSearchActionTypes';
import axios from 'axios';

export const inputStartPoint = e => {
    return {
        type: INPUT_SEARCH_START_POINT,
        payload: e
    }
}

export const inputEndPoint = e => {
    return {
        type: INPUT_SEARCH_END_POINT,
        payload: e
    }
}

export const requestSearchStartPoint = () => {
    return (dispatch, getState) => {
      let { startPoint } = getState().RouteSearchReducer;
      return axios
        .get(
          `https://nominatim.openstreetmap.org/?addressdetails=1&q=${startPoint}&format=json&limit=1`
        )
        .then((response) => {
          console.log(response);
          dispatch({
            type: SUCCESS_GET_START_POINT,
            payload: response.data,
          });
        })
        .catch((err) => {
          console.log(err);
          dispatch({
            type: FAILURE_GET_START_POINT,
          });
        });
    };
  };

  export const requestSearchEndPoint = () => {
    return (dispatch, getState) => {
      let { endPoint } = getState().RouteSearchReducer;
      return axios
        .get(
          `https://nominatim.openstreetmap.org/?addressdetails=1&q=${endPoint}&format=json&limit=1`
        )
        .then((response) => {
          console.log(response);
          dispatch({
            type: SUCCESS_GET_END_POINT,
            payload: response.data,
          });
        })
        .catch((err) => {
          console.log(err);
          dispatch({
            type: FAILURE_GET_END_POINT,
          });
        });
    };
  };
export const getCurrentLocation = () => {
  return (dispatch, getState) => {
    const cb = (x) => {
      console.log(x.coords);
      dispatch({
        type: GET_CURRENT_LOCATION,
        payload: x.coords,
      });
    };
    let currentLocation = navigator.geolocation.getCurrentPosition(cb);
  };
}