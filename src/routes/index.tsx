import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';
import Board from '../screens/board';

export default function Routes(): ReactElement {
    return (
        <Router>
            <Switch>
                <Route path="/" component={App} />
                <Route path="/board" component={Board} />
            </Switch>
        </Router>
    );
}
