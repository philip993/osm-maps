import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import './SearchStyle.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  clearInputSearchText,
  inputSearchText,
  requestSearchText,
} from './SearchActions';
import Routing from '../Routing/Routing';

const Search = () => {
  const { searchObject, searchText } = useSelector(
    (state) => state.SearchReducer,
  );
  const dispatch = useDispatch();

  const handleSearchInput = (e) => {
    dispatch(inputSearchText(e.target.value));
  };

  const handleClearSearchInput = () => {
    dispatch(clearInputSearchText());
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(requestSearchText());
  };

  return (
    <div className="search">
      <h1>Search</h1>
      <Form className="searchForm" onSubmit={handleSearch}>
        <Form.Label className="formLabel">Search for</Form.Label>
        <Form.Group className="formGroup">
          <Form.Control
            size="lg"
            required
            type="text"
            value={searchText}
            onChange={handleSearchInput}
            placeholder="e.g. Barcelona"
          />
        </Form.Group>
        <Form.Group className="formGroupBtn">
          <Button className="searchBtn" variant="primary" type="submit">
            Search
          </Button>
          <Button
            className="clearBtn"
            variant="danger"
            type="button"
            onClick={handleClearSearchInput}
          >
            Clear
          </Button>
        </Form.Group>
      </Form>
      {!searchObject
        ? ''
        : searchObject.map((s) => (
            <Card className="card">
              <Card.Header className="cardHeader">Search Result</Card.Header>
              <Card.Body className="cardBody">
                <Card.Title className="cardTitle">{s.display_name}</Card.Title>
                <Card.Text className="cardText">
                  Lat: {s.lat} Lng: {s.lng}
                </Card.Text>
                <Routing />
              </Card.Body>
            </Card>
          ))}
    </div>
  );
};

export default Search;
