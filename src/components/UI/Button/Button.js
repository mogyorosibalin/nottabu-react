import React from 'react';

import classes from './Button.css';

const button = (props) => {
    const classNames = [classes.Button, classes[props.type]];
    if (props.addClass) classNames.push(props.addClass);
    return (
        <button className={classNames.join(' ')} style={props.addStyle} onClick={props.clicked}>
            {props.children}
        </button>
    );
};

export default button;