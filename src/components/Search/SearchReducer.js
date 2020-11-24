import {
  SUCCESS_GET_SEARCH_INFO,
  FAILURE_GET_SEARCH_INFO,
  INPUT_SEARCH_TEXT,
  SET_LATITUDE,
  SET_LONGITUDE,
} from "./SearchActionTypes";

const initialState = {
  searchText: "",
  searchObject: [],
  searchObjectError: null,
  latitude: 51.505,
  longitude: -0.09,
};

export const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_SEARCH_INFO:
      return {
        ...state,
        searchObject: action.payload,
        searchObjectError: false,
      };
    case FAILURE_GET_SEARCH_INFO:
      return {
        ...state,
        searchObject: null,
        searchObjectError: true,
      };
    case INPUT_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      };
    case SET_LATITUDE:
      return {
        ...state,
        latitude: state.searchObject[0].lat,
      };
    case SET_LONGITUDE:
      return {
        ...state,
        longitude: state.searchObject[0].lon,
      };
    default:
      return state;
  }
};
