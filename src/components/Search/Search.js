import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SearchStyle.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, Button, Card, Modal } from 'react-bootstrap';
import {
  clearInputSearchText,
  inputSearchText,
  requestSearchText,
} from './SearchActions';
import {
  toggleModalOff,
  toggleModalOn,
  clearRoutingSteps,
} from '../Routing/RoutingActions';
import Routing from '../Routing/Routing';
import {
  faTimes,
  faEllipsisV,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  requestCreatePOISearch,
  toggleOptionsTrue,
  poiModalNotVisible,
  poiModalVisible,
  clearPoiSearchResult,
} from '../POI/POIActions';

const Search = () => {
  const { searchObject, searchText, showModal } = useSelector((state) => ({
    ...state.SearchReducer,
    ...state.RoutingReducer,
  }));
  const dispatch = useDispatch();

  const handleSearchInput = (e) => {
    dispatch(inputSearchText(e.target.value));
  };

  const handleClearSearchInput = () => {
    dispatch(clearInputSearchText());
    dispatch(toggleModalOff());
    dispatch(poiModalNotVisible());
  };

  const handleModalOff = () => {
    dispatch(toggleModalOff());
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(requestSearchText());
    dispatch(toggleModalOn());
  };

  const handleSearchPOIs = () => {
    dispatch(requestCreatePOISearch());
    dispatch(toggleModalOff());
    dispatch(toggleOptionsTrue());
    dispatch(poiModalVisible());
  };

  const handleClearInput = () => {
    dispatch(clearInputSearchText());
    dispatch(clearPoiSearchResult());
    dispatch(clearRoutingSteps());
    dispatch(clearPoiSearchResult());
  };

  return (
    <div className="search">
      <Form inline onSubmit={handleSearch} id="f">
        <Form.Label htmlFor="inlineFormInputName2" srOnly>
          Search
        </Form.Label>
        <Form.Control
          className="formInput"
          required
          type="text"
          value={searchText}
          onChange={handleSearchInput}
          placeholder="e.g. Barcelona"
        />
        <FontAwesomeIcon
          onClick={handleClearInput}
          icon={faTimesCircle}
          className="clearIcon"
        />
        <Button className="searchBtn" variant="info" type="submit">
          Search
        </Button>
      </Form>

      <Modal
        show={showModal}
        onHide={handleModalOff}
        aria-labelledby="modal"
        id="modal"
      >
        <Modal.Header id="header">
          <Modal.Title id="title">Search Result</Modal.Title>

          <FontAwesomeIcon
            onClick={handleClearSearchInput}
            size="2x"
            icon={faTimes}
            id="icon"
          />
        </Modal.Header>
        <Modal.Body id="body">
          {!searchObject
            ? ''
            : searchObject.map((s) => (
                <Card id="card">
                  <Card.Body id="cardBody">
                    <Card.Title>{s.display_name}</Card.Title>
                    <Card.Text id="cardText">
                      Lat: {s.lat} Lng: {s.lon}
                    </Card.Text>
                  </Card.Body>
                  <Routing />
                  <Button className="moreBtn" onClick={handleSearchPOIs}>
                    More <FontAwesomeIcon className="icon" icon={faEllipsisV} />
                  </Button>
                </Card>
              ))}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Search;
