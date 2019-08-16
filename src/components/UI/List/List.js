import React from 'react';

import classes from './List.css';

const list = (props) => (
    <ul className={classes.List}>
        {props.children}
    </ul>
);

export default list;