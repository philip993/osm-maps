import React from 'react';
import './DirectionLayoutStyle.scss';
import { ListGroup } from 'react-bootstrap';

const DirectionLayout = ({ distance, duration, instruction, name }) => {
  return (
    <div className="directionLayout">
      <ListGroup as="ul" className="listGroup">
        <ListGroup.Item as="li" className="lgHeader">
          {instruction}
        </ListGroup.Item>
        <ListGroup.Item as="li">{name}</ListGroup.Item>
        <ListGroup.Item as="li">
          {distance < 1000
            ? Math.round(distance) + ' MT'
            : Math.round(distance / 1000) + ' KM'}
        </ListGroup.Item>
        <ListGroup.Item as="li">
          {duration < 60
            ? Math.round(duration) + ' sec'
            : Math.round(duration / 60) + ' min'}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default DirectionLayout;
