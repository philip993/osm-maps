import React from 'react';
import { Navbar } from 'react-bootstrap';
import './HeaderStyle.scss';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Search from '../Search/Search';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const history = useHistory();
  const handleRedirect = () => {
    history.push('/');
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
          <Link to="/pois" className="link">
            POIs
          </Link>
        </Navbar.Brand>
        <div className="one">
          <Search />
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
