import {
  INPUT_SEARCH_TEXT,
  SUCCESS_GET_SEARCH_INFO,
  FAILURE_GET_SEARCH_INFO,
} from "./SearchActionTypes";
import axios from "axios";

export const requestSearchText = () => {
  return (dispatch, getState) => {
    let { searchText } = getState().SearchReducer;
    return axios
      .get(
        `https://nominatim.openstreetmap.org/?addressdetails=1&q=${searchText}&format=json&limit=1`
      )
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_GET_SEARCH_INFO,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_GET_SEARCH_INFO,
        });
      });
  };
};

export const inputSearchText = (e) => {
  return {
    type: INPUT_SEARCH_TEXT,
    payload: e,
  };
};
