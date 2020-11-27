import {
  SUCCESS_GET_SEARCH_INFO,
  FAILURE_GET_SEARCH_INFO,
  INPUT_SEARCH_TEXT,
} from "./SearchActionTypes";

const initialState = {
  searchText: "",
  searchObject: [],
  searchObjectError: null,
  latCoord: "",
  lngCoord: "",
};

export const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_SEARCH_INFO:
      return {
        ...state,
        searchObject: action.payload,
        searchObjectError: false,
        latCoord: action.payload[0].lat,
        lngCoord: action.payload[0].lon,
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
    default:
      return state;
  }
};
