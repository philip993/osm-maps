import { FAILURE_GET_SEARCH_INFO } from '../Search/SearchActionTypes';
import { FAILURE_GET_END_POINT, INPUT_SEARCH_END_POINT, INPUT_SEARCH_START_POINT, SUCCESS_GET_END_POINT, SUCCESS_GET_START_POINT } from './RouteSearchActionTypes';

const initialState = {
    startObject: [],
    endObject: [],
    startPoint: '',
    endPoint: '',
    startPointLat: '',
    startPointLon: '',
    endPointLat: '',
    endPointLon: ''

}

export const RouteSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_GET_START_POINT:
            return {
                ...state,
                startObject: action.payload,
                startPointLat: action.payload[0].lat,
                startPointLon: action.payload[0].lon

            }
        case FAILURE_GET_SEARCH_INFO:
            return {
                ...state,
                startObject: null
            }
        case SUCCESS_GET_END_POINT:
            return {
                ...state,
                endObject: action.payload,
                endPointLat: action.payload[0].lat,
                endPointLon: action.payload[0].lon
            }
        case FAILURE_GET_END_POINT:
            return {
                ...state,
                endObject: null
            }
        case INPUT_SEARCH_START_POINT:
            return {
                ...state,
                startPoint: action.payload
            }
        case INPUT_SEARCH_END_POINT:
            return {
                ...state,
                endPoint: action.payload
            }
        default:
            return state;
    }
}