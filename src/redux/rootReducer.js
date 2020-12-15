import { combineReducers } from 'redux';

import { SearchReducer } from '../components/Search/SearchReducer';
import { RoutingReducer } from '../components/Routing/RoutingReducer';
import { RouteSearchReducer } from '../components/RouteSearch/RouteSearchReducer';
import { POIReducer } from '../components/POI/POIReducer';

const rootReducer = combineReducers({
  SearchReducer,
  RoutingReducer,
  RouteSearchReducer,
  POIReducer,
});

export default rootReducer;
