import React from 'react';
import './AboutStyle.scss';
import { Container, Jumbotron } from 'react-bootstrap';

const About = () => {
  return (
    <div className="about">
      <Jumbotron fluid className="jumbotron">
        <Container>
          <h1>About</h1>
          <p>
            OSM MAPS uses Open Street Maps as base map. You can search the map
            for any place, street, etc., via Nominatim API. Routing service is
            available from starting point to selected end point, via Openroute
            service API.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default About;
