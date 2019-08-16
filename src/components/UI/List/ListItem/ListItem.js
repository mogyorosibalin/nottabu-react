import React from 'react';

import classes from './ListItem.css';

const listItem = (props) => (
    <li className={classes.ListItem}>
        {props.children}
    </li>
);

export default listItem;