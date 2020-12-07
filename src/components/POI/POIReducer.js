import {
  SUCCESS_CREATE_POI_SEARCH,
  FAILURE_CREATE_POI_SEARCH,
  SELECT_CATEGORY_FILTER,
  CLEAR_CATEGORY_FILTER,
  TOGGLE_OPTIONS_TRUE,
  TOGGLE_OPTIONS_FALSE,
} from './POIActionTypes';

const initialState = {
  poiObject: [],
  poiError: null,
  poiPlaces: [],
  poiSearchCategory: '',
  poiResult: null,
};

export const POIReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_CREATE_POI_SEARCH:
      return {
        ...state,
        poiObject: action.payload,
        poiError: false,
        poiPlaces: action.payload.features.map((t) => t),
      };
    case FAILURE_CREATE_POI_SEARCH:
      return {
        ...state,
        poiObject: null,
        poiError: true,
      };
    case SELECT_CATEGORY_FILTER:
      return {
        ...state,
        poiSearchCategory: action.payload,
      };
    case CLEAR_CATEGORY_FILTER:
      return {
        ...state,
        poiSearchCategory: '',
      };
    case TOGGLE_OPTIONS_TRUE:
      return {
        ...state,
        poiResult: true,
      };
    case TOGGLE_OPTIONS_FALSE:
      return {
        ...state,
        poiResult: false,
      };
    default:
      return state;
  }
};
