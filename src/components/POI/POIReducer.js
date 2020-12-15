import {
  SUCCESS_CREATE_POI_SEARCH,
  FAILURE_CREATE_POI_SEARCH,
  SELECT_CATEGORY_FILTER,
  CLEAR_CATEGORY_FILTER,
  TOGGLE_OPTIONS_TRUE,
  TOGGLE_OPTIONS_FALSE,
  POI_MODAL_VISIBLE,
  POI_MODAL_NOT_VISIBLE,
  CLEAR_POI_SEARCH_RESULT,
} from './POIActionTypes';

const initialState = {
  poiObject: [],
  poiError: null,
  poiPlaces: [],
  poiSearchCategory: '',
  poiResult: null,
  poiModal: null,
  poiPosition: null,
};

export const POIReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_CREATE_POI_SEARCH:
      return {
        ...state,
        poiObject: action.payload,
        poiError: false,
        poiPlaces: action.payload.features.map((t) => t),
        poiPosition: true,
      };
    case FAILURE_CREATE_POI_SEARCH:
      return {
        ...state,
        poiObject: null,
        poiError: true,
        poiPosition: false,
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
    case POI_MODAL_VISIBLE:
      return {
        ...state,
        poiModal: true,
      };
    case POI_MODAL_NOT_VISIBLE:
      return {
        ...state,
        poiModal: false,
      };
    case CLEAR_POI_SEARCH_RESULT:
      return {
        ...state,
        poiObject: [],
        poiPlaces: [],
        poiPosition: null,
      };
    default:
      return state;
  }
};
