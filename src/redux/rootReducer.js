import { combineReducers } from "redux";

import { SearchReducer } from "../components/Search/SearchReducer";

const rootReducer = combineReducers({
  SearchReducer,
});

export default rootReducer;
