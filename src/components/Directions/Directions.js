import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DirectionLayout from '../DirectionLayout/DirectionLayout';

const Directions = () => {
  const { routeSteps } = useSelector((state) => ({
    ...state.RoutingReducer,
  }));
  const dispatch = useDispatch();

  return (
    <div>
      {routeSteps.map(({ ...otherProps }) => (
        <DirectionLayout {...otherProps} />
      ))}
    </div>
  );
};

export default Directions;
