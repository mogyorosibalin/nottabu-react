import React from 'react';

import Layout from './hoc/Layout/Layout';
import Game from './components/Game/Game';

const app = (props) => (
    <Layout>
        <Game />
    </Layout>
);

export default app;