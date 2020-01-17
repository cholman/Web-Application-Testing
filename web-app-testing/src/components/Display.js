import React from 'react';

export const Display = (props) => {
    return (
        <div>
            <p>Balls: {props.balls}</p>
            <p>Strikes: {props.strikes}</p>
            <p>Hits: {props.hits}</p>
        </div>
    )
}

export default Display;