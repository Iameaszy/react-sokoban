import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';

export default function Routes(): ReactElement {
    return (
        <Router>
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </Router>
    );
}
