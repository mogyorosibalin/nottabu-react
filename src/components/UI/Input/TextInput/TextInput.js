import React, { Component } from 'react';

import classes from './TextInput.css';

class TextInput extends Component {
    render() {
        return (
            <div className={classes.TextInput}>
                <input type="text" value={""} palceholder={""} />
            </div>
        );
    }
}

export default TextInput;