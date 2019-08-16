import React from 'react';

import classes from './CardBody.css';

const cardBody = (props) => {
    let style = props.noSpacing ? { padding: '0' } : {};
    if (props.addStyle) style = { ...style, ...props.addStyle };
    const classNames = [classes.CardBody];
    if (props.addClass) classNames.push(props.addClass);
    return (
        <main className={classNames.join(' ')} style={style}>
            {props.children}
        </main>
    );
};

export default cardBody;