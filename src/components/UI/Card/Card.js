import React from 'react';

import classes from './Card.css';

const card = (props) => {
    const style = props.borderColor ? { borderColor: props.borderColor } : {};
    const classNames = [classes.Card];
    if (props.addClass) {
        if (classes[props.addClass]) classNames.push(classes[props.addClass]);
        else classNames.push(props.addClass);
    }
    return (
        <div className={classNames.join(' ')} style={style} onClick={props.clicked}>
            {props.children}
        </div>
    );
};

export default card;