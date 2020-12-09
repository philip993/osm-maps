import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './POIStyle.scss';
import {
  selectCategoryFilter,
  clearCategoryFilter,
  toggleOptionsFalse,
  poiModalVisible,
} from './POIActions';
import { Button, Modal } from 'react-bootstrap';
const POI = () => {
  const { poiResult } = useSelector((state) => ({
    ...state.POIReducer,
  }));
  const dispatch = useDispatch();

  const handleGetValue = (e) => {
    dispatch(selectCategoryFilter(e.target.value));
    console.log(e.target.value);
  };

  const handleToggleOptionsFalse = () => {
    dispatch(toggleOptionsFalse());
    dispatch(poiModalVisible());
  };

  const handleClearFilter = () => {
    dispatch(clearCategoryFilter());
    dispatch(toggleOptionsFalse());
  };
  return (
    <div className="pois">
      <Modal
        show={poiResult}
        onHide={handleToggleOptionsFalse}
        className="modal"
      >
        <Modal.Header closeButton className="mHeader">
          <Modal.Title className="mTitle">POI Search Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body className="mBody">
          <div className="options">
            <ul onClick={handleGetValue} className="left">
              <li value={395}>Hairdressers</li>
              <li value={192}>Bank</li>
              <li value={191}>ATM</li>
              <li value={570}>Restaurant</li>
              <li value={564}>Cafe</li>
            </ul>{' '}
            <ul onClick={handleGetValue} className="right">
              <li value={206}>Hospitals</li>
              <li value={518}>Supermakerts</li>
              <li value={298}>Casinos</li>
              <li value={604}>Station</li>
              <li value={135}>Churches</li>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer className="mFooter">
          <Button variant="dark" className="poiBtn" onClick={handleClearFilter}>
            Show All
          </Button>
        </Modal.Footer>
      </Modal>

      {/*     NEW PAGE WIHTOUT MODAL  
      <div className="options" hidden={poiResult}>
        <ul onClick={handleGetValue} className="left">
          <li value={395}>Hairdressers</li>
          <li value={192}>Bank</li>
          <li value={191}>ATM</li>
          <li value={570}>Restaurant</li>
          <li value={564}>Cafe</li>
        </ul>{' '}
        <ul onClick={handleGetValue} className="right">
          <li value={206}>Hospitals</li>
          <li value={518}>Supermakerts</li>
          <li value={298}>Casinos</li>
          <li value={604}>Station</li>
          <li value={135}>Churches</li>
        </ul>
        <div>
          <Button variant="dark" className="poiBtn" onClick={handleClearFilter}>
            Show All
          </Button>
        </div>
      </div> */}
    </div>
  );
};
export default POI;
