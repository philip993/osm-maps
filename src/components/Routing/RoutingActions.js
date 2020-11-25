import {
  SUCCESS_CREATE_ROUTE,
  FAILURE_CREATE_ROUTE,
  GET_ROUTE_DIRECTIONS,
} from "./RoutingActionTypes";
import axios from "axios";
const API_KEY = "";

export const requestCreateRoute = () => {
  return (dispatch, getState) => {
    let { latitude, longitude } = getState().SearchReducer;

    return axios
      .get(
        `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${API_KEY}&start=-0.124669,51.500595,&end=${longitude},${latitude}`
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
