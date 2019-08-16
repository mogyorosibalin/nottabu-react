import React from 'react';

import classes from './CardHeader.css';

const cardHeader = (props) => {
    let style = props.bgColor ? { backgroundColor: props.bgColor } : {};
    style = props.noSpacing ? { ...style, padding: '0' } : style;
    return (
        <header className={classes.CardHeader} style={style}>
            <h3 className={classes.CardTitle}>
                {props.children}
            </h3>
        </header>
    );
};

export default cardHeader;