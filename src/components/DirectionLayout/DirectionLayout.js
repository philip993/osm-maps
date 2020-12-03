import React from 'react';
import './DirectionLayoutStyle.scss';
import { ListGroup } from 'react-bootstrap';

const DirectionLayout = ({ distance, duration, instruction, name }) => {
  return (
    <div className="directionLayout">
      <ListGroup as="ul" className="listGroup">
        <ListGroup.Item as="li" active>
          {instruction}
        </ListGroup.Item>
        <ListGroup.Item as="li">{name}</ListGroup.Item>
        <ListGroup.Item as="li" disabled>
          {distance} Mt
        </ListGroup.Item>
        <ListGroup.Item as="li">{duration} seconds</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default DirectionLayout;
