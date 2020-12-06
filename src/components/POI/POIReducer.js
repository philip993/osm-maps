import {
  SUCCESS_CREATE_POI_SEARCH,
  FAILURE_CREATE_POI_SEARCH,
} from './POIActionTypes';

const initialState = {
  poiObject: [],
  poiError: null,
  poiPlaces: [],
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
    default:
      return state;
  }
};
