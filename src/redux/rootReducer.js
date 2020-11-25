import { combineReducers } from "redux";

import { SearchReducer } from "../components/Search/SearchReducer";
import { RoutingReducer } from "../components/Routing/RoutingReducer";

const rootReducer = combineReducers({
  SearchReducer,
  RoutingReducer,
});

export default rootReducer;
