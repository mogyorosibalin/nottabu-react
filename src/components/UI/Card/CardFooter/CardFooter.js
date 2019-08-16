import React from 'react';

import classes from './CardFooter.css';

const cardFooter = (props) => {
    let style = props.borderColor ? { borderColor: props.borderColor } : {};
    style = props.noSpacing ? { ...style, padding: '0' } : style;
    return (
        <footer className={classes.CardFooter} style={style}>
            {props.children}
        </footer>
    );
}

export default cardFooter;