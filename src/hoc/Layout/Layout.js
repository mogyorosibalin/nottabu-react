import React from 'react';

import Aux from './../Aux/Aux';
import Toolbar from './../../components/Navigation/Toolbar/Toolbar';

import classes from './Layout.css';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <aside>SideDrawer</aside>
        <main className={classes.Main}>
            {props.children}
        </main>
    </Aux>
);

export default layout;