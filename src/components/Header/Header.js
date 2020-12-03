import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './HeaderStyle.scss';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';

const Header = () => {
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark" className="navbar">
        <Navbar.Brand className="brand">
          <Link className="link" to="/">
            OSM
          </Link>
        </Navbar.Brand>
        <Navbar.Brand id="two">
          <Link to="/about" className="link">
            About
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
