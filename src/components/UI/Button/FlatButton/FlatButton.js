import React from 'react';

import Button from './../Button';

import classes from './FlatButton.css';

const flatButton = (props) => (
    <Button type={props.type} addClass={classes.FlatButton} addStyle={props.addStyle} clicked={props.clicked}>
        {props.children}
    </Button>
);

export default flatButton;