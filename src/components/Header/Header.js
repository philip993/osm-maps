import React from 'react';
import { Navbar } from 'react-bootstrap';
import './HeaderStyle.scss';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Search from '../Search/Search';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { toggleOptionsTrue } from '../POI/POIActions';

const Header = () => {
  const { poiModal, searchText } = useSelector((state) => ({
    ...state.POIReducer,
    ...state.SearchReducer,
  }));
  const dispatch = useDispatch();
  const history = useHistory();
  const handleRedirect = () => {
    history.push('/');
  };

  const handleModalVisibilty = () => {
    dispatch(toggleOptionsTrue());
  };
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark" className="navbar">
        <Navbar.Brand className="brand">
          <FontAwesomeIcon
            onClick={handleRedirect}
            size="1x"
            icon={faGlobeEurope}
            className="icon"
          />
        </Navbar.Brand>
        <Navbar.Brand className="brand">
          <Link className="link" to="/">
            OSM
          </Link>
        </Navbar.Brand>
        <Navbar.Brand id="two">
          <Link to="/about" className="link">
            About
          </Link>
          {poiModal && searchText !== '' ? (
            <Link onClick={handleModalVisibilty} className="link">
              POIs
            </Link>
          ) : (
            ''
          )}
        </Navbar.Brand>
        <div className="one">
          <Search />
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
