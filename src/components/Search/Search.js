import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { inputSearchText, requestSearchText } from "./SearchActions";

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
  };

  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchText}
          onChange={handleSearchInput}
          placeholder="Search...."
        />
        <button type="submit">Search</button>
      </form>
      {searchObject.map((s) => (
        <React.Fragment>
          <h3>Result</h3>
          <h4>
            {s.address.city}, {s.address.country}
          </h4>
          <h4>{s.address.postcode}</h4>
          <h4>
            Lat: {s.lat} Lng: {s.lon}
          </h4>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Search;
