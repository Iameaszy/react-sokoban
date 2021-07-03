import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';
import { Board } from '../components/board';
import { GameControls } from '../components/game-controls';

export default function Routes(): ReactElement {
    return (
        <Router>
            <Switch>
                <Route path="/" component={GameControls} />
                <Route path="/playground" component={Board} />
                <Route path="/app" component={App} />
            </Switch>
        </Router>
    );
}
