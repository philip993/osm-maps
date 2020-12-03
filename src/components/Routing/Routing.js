import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './RoutingStyle.scss';
import { Button } from 'react-bootstrap';
import { requestCreateRoute, toggleModalOff } from './RoutingActions';

const Routing = () => {
  const { routeDirections } = useSelector((state) => state.RoutingReducer);
  const dispatch = useDispatch();

  const handleRoute = () => {
    dispatch(requestCreateRoute());
    dispatch(toggleModalOff());
  };

  console.log(routeDirections);

  return (
    <Button className="button" variant="success" onClick={handleRoute}>
      Get Route
    </Button>
  );
};

export default Routing;
