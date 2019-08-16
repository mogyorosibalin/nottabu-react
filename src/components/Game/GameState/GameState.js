import React from 'react';

import CirclePercentage from './../../UI/Percentage/Circle/Circle';

import classes from './GameState.css';

const gameState = (props) => {
    const percentage = props.guessedGood / (props.guessedGood + props.guessedWrong);
    return (
        <div className={['row center-xs', classes.GameState].join(' ')}>
            <div className='col-xs-6 col-md-4 col-lg-2'>
                <CirclePercentage percentage={percentage} allColor="darkred" highlightColor="darkgreen">
                    <span className={classes.Wrong}>{props.guessedWrong}</span>
                    &nbsp;
                    |
                    &nbsp;
                    <span className={classes.Good}>{props.guessedGood}</span>
                </CirclePercentage>
            </div>
            <div className='col-xs-6 col-md-4 col-lg-2'>
                <CirclePercentage percentage={47 / 60}>
                    47
                </CirclePercentage>
            </div>
        </div>
    );
};

export default gameState;