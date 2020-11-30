import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/">OSM</Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">Map</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/routing">Routing</Link>
          </Nav.Link>
          <Nav.Link to="/about">About</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
