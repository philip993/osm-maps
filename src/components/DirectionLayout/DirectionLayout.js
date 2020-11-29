import React from 'react';

const DirectionLayout = ({ distance, duration, instruction, name }) => {

    return (
        <div>
            <h4>{distance}</h4>
            <h4>{duration}</h4>
            <h4>{instruction}</h4>
            <h4>{name}</h4>
        </div>
    )
}

export default DirectionLayout;