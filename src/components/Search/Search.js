import React from 'react';
import { Form, Button, Card, Modal } from 'react-bootstrap';
import './SearchStyle.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  clearInputSearchText,
  inputSearchText,
  requestSearchText,
} from './SearchActions';
import Routing from '../Routing/Routing';
import { toggleModalOff, toggleModalOn } from '../Routing/RoutingActions';

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
  };

  const handleModalOff = () => {
    dispatch(toggleModalOff());
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(requestSearchText());
    dispatch(toggleModalOn());
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
        <Button className="searchBtn" variant="info" type="submit">
          Search
        </Button>
      </Form>

      <Modal
        show={showModal}
        onHide={handleModalOff}
        dialogClassName="modal-90w"
        // aria-labelledby="example-custom-modal-styling-title"
        id="modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modalTitle">Search Result</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!searchObject
            ? ''
            : searchObject.map((s) => (
                <Card className="card">
                  <Card.Body className="cardBody">
                    <Card.Title className="cardTitle">
                      {s.display_name}
                    </Card.Title>
                    <Card.Text className="cardText">
                      Lat: {s.lat} Lng: {s.lon}
                    </Card.Text>
                    <Routing />
                    <Button
                      className="clearBtn"
                      variant="danger"
                      type="button"
                      onClick={handleClearSearchInput}
                    >
                      Clear
                    </Button>
                  </Card.Body>
                </Card>
              ))}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Search;
