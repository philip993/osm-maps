import {
  SUCCESS_CREATE_ROUTE,
  FAILURE_CREATE_ROUTE,
  GET_ROUTE_DIRECTIONS,
} from "./RoutingActionTypes";

const initialState = {
  routeObject: [],
  routeObjectError: null,
  routeDirections: [],
  routeDuration: '',
  routeLength: '',
  routeSteps: []
};

export const RoutingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_CREATE_ROUTE:
      return {
        ...state,
        routeObject: action.payload,
        routeObjectError: false,
        routeDirections: action.payload.features[0].geometry.coordinates.map(
          (t) => t.reverse()
        ),
        routeDuration: action.payload.features[0].properties.summary.duration,
        routeLength: action.payload.features[0].properties.summary.distance,
        routeSteps: action.payload.features[0].properties.segments[0].steps
      };
    case FAILURE_CREATE_ROUTE:
      return {
        ...state,
        routeObject: null,
        routeObjectError: true,
      };
    case GET_ROUTE_DIRECTIONS:
      return {
        ...state,
        routeDirections: state.routeObject.features[0].geometry.coordinates.map(
          (t) => t.reverse()
        ),
      };
    default:
      return state;
  }
};
