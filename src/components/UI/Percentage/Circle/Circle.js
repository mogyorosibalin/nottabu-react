import React from 'react';

import classes from './Circle.css';

const circle = (props) => {
    const rad = Math.round(props.percentage * 360);
    const highlightColor = props.highlightColor ? props.highlightColor : 'black';
    const allColor = props.allColor ? props.allColor : 'gray';
    const bgColor = props.bgColor ? props.bgColor : 'white';
    let style = { backgroundColor: highlightColor };
    if (rad <= 180) {
        style['backgroundImage'] = ` 
            linear-gradient(${90 + rad}deg, transparent 50%, ${allColor} 50%),
            linear-gradient(90deg, ${allColor} 50%, transparent 50%)`;
    } else {
        style['backgroundImage'] = ` 
            linear-gradient(${rad - 90}deg, transparent 50%, ${highlightColor} 50%),
            linear-gradient(90deg, ${allColor} 50%, transparent 50%)`;
    }
    return (
        <div className={classes.GameState}>
            <div className={classes.CircleHighlight} style={style}>
                <div className={classes.Circle} style={{ backgroundColor: bgColor }}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default circle;