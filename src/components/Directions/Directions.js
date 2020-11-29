import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DirectionLayout from '../DirectionLayout/DirectionLayout';

const Directions = () => {
    const { routeSteps } = useSelector(state => ({
        ...state.RoutingReducer
        }));
    const dispatch = useDispatch();

    return (
        <div>
            {
               routeSteps.map(({...otherProps}) => (
                    <DirectionLayout {...otherProps}/>
                ))
            // routeSteps.map(({distance, duration, instruction, name}, index) => (
            //     <div>
            //         <h4>{distance}</h4>
            //         <h4>{duration}</h4>
            //         <h4>{instruction}</h4>
            //         <h4>{name}</h4>
            //     </div>
            // ))
            }
        </div>
    )
}

export default Directions;