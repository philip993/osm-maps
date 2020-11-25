import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestCalculateRoute } from '../Routing/RoutingActions';
import { inputEndPoint, inputStartPoint, requestSearchEndPoint, requestSearchStartPoint } from './RouteSearchAction';

const RouteSearch = () => {
    const { startPoint, endPoint } = useSelector(state => ({
        ...state.RouteSearchReducer
    }))
    const dispatch = useDispatch();

    const handleInputStartPoint = e => {
        dispatch(inputStartPoint(e.target.value))
    }

    const handleInputEndPoint = e => {
        dispatch(inputEndPoint(e.target.value))
    }

    const handleSubmit =  (e) => {
        e.preventDefault();
        dispatch(requestSearchStartPoint())
        dispatch(requestSearchEndPoint())
        setTimeout(() => {
            dispatch(requestCalculateRoute())
        }, 1000)
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={startPoint} onChange={handleInputStartPoint} placeholder='START POINT'/>
                <input type="text" value={endPoint} onChange={handleInputEndPoint} placeholder='END POINT'/>
                <button type={'submit'}>Calculate Route</button>
            </form>
        </div>
    )
}

export default RouteSearch;