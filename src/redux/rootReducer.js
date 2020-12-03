import { combineReducers } from "redux";

import { SearchReducer } from "../components/Search/SearchReducer";
import { RoutingReducer } from "../components/Routing/RoutingReducer";
import { RouteSearchReducer } from '../components/RouteSearch/RouteSearchReducer'

const rootReducer = combineReducers({
  SearchReducer,
  RoutingReducer,
  RouteSearchReducer
});

export default rootReducer;
