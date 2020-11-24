import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  inputSearchText,
  requestSearchText,
  setNewLatitude,
  setNewLongitude,
} from "./SearchActions";

const Search = () => {
  const { searchObject, searchText } = useSelector(
    (state) => state.SearchReducer
  );
  const dispatch = useDispatch();

  const handleSearchInput = (e) => {
    dispatch(inputSearchText(e.target.value));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(requestSearchText());
    setTimeout(() => {
      dispatch(setNewLongitude());
      dispatch(setNewLatitude());
    }, 1000);
  };

  return (
    <div>
      <h1>Search</h1>
      <button onClick={handleSearch}>Search</button>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchText}
          onChange={handleSearchInput}
          placeholder="Search...."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
