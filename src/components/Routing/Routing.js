import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { requestCreateRoute, getRouteDirections } from './RoutingActions';

const Routing = () => {
  const { routeObject, routeDirections } = useSelector(
    (state) => state.RoutingReducer,
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRoute = () => {
    dispatch(requestCreateRoute());
    setTimeout(() => {
      history.push('/');
    }, 1000);
  };

  console.log(routeDirections);

  return (
    <Button className="button" variant="success" onClick={handleRoute}>
      Get Route
    </Button>
  );
};

export default Routing;
