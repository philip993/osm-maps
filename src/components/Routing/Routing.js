import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestCreateRoute, getRouteDirections } from "./RoutingActions";

const Routing = () => {
  const { routeObject, routeDirections } = useSelector(
    (state) => state.RoutingReducer
  );
  const dispatch = useDispatch();

  const handleRoute = () => {
    dispatch(requestCreateRoute());
    setTimeout(() => {
      dispatch(getRouteDirections());
    }, 1000);
  };

  console.log(routeDirections);

  return (
    <div>
      <h1>Routing</h1>
      <button onClick={handleRoute}>Get Route</button>
    </div>
  );
};

export default Routing;
