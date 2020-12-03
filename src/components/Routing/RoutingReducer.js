import {
  SUCCESS_CREATE_ROUTE,
  FAILURE_CREATE_ROUTE,
  GET_ROUTE_DIRECTIONS,
  TOGGLE_MODAL_STEPS_ON,
  TOGGLE_MODAL_STEPS_OFF,
} from './RoutingActionTypes';

const initialState = {
  routeObject: [],
  routeObjectError: null,
  routeDirections: [],
  routeDuration: '',
  routeLength: '',
  routeSteps: [],
  wayPoint: [],
  showModal: false,
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
        wayPoint: action.payload.features[0].properties.segments[0].steps.map(
          (t) => t.way_points
        ),
        routeDuration: action.payload.features[0].properties.summary.duration,
        routeLength: action.payload.features[0].properties.summary.distance,
        routeSteps: action.payload.features[0].properties.segments[0].steps,
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
    case TOGGLE_MODAL_STEPS_ON:
      return {
        ...state,
        showModal: true,
      };
    case TOGGLE_MODAL_STEPS_OFF:
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
};
