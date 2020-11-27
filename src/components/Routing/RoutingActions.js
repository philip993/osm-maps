import {
  SUCCESS_CREATE_ROUTE,
  FAILURE_CREATE_ROUTE,
  GET_ROUTE_DIRECTIONS,
} from "./RoutingActionTypes";
import axios from "axios";
const API_KEY = "5b3ce3597851110001cf624814771ee0ac454870b5974cb43f300fed";

export const requestCreateRoute = () => {
  return (dispatch, getState) => {
    let { latitude, longitude, latCoord, lngCoord } = getState().SearchReducer;
    let { currentLatitude, currentLongitude } = getState().RouteSearchReducer;

    return axios
      .get(
        `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${API_KEY}&start=${currentLongitude},${currentLatitude},&end=${lngCoord},${latCoord}`
      )
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_CREATE_ROUTE,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_CREATE_ROUTE,
        });
      });
  };
};

export const getRouteDirections = () => {
  return {
    type: GET_ROUTE_DIRECTIONS,
  };
};

export const requestCalculateRoute = () => {
  return (dispatch, getState) => {
    let {
      startPointLat,
      startPointLon,
      endPointLat,
      endPointLon,
      currentLatitude,
      currentLongitude,
    } = getState().RouteSearchReducer;

    return axios
      .get(
        `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${API_KEY}&start=${currentLongitude},${currentLatitude},&end=${endPointLon},${endPointLat}`
      )
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_CREATE_ROUTE,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_CREATE_ROUTE,
        });
      });
  };
};
