import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';
import HomeLayout from '../components/layout/home';
import MainLayout from '../components/layout/main';
import { BoardProvider } from '../providers/board-provider';
import { GameProvider } from '../providers/game-provider';
import { LevelsProvider } from '../providers/levels-provider';
import { UserProvider } from '../providers/user-provider';
import HomeScreen from '../screens/home';
import MissionScreen from '../screens/instruction';
import Playground from '../screens/playground';
import SignupScreen from '../screens/signup';

export default function Routes(): ReactElement {
    return (
        <Router>
            <GameProvider>
                <LevelsProvider>
                    <BoardProvider>
                        <UserProvider>
                            <Switch>
                                <HomeLayout path="/" component={HomeScreen} exact />
                                <MainLayout path="/playground" component={Playground} />
                                <HomeLayout path="/mission/:stage" component={MissionScreen} />
                                <HomeLayout path="/register" component={SignupScreen} />
                                <Route path="/app" component={App} />
                            </Switch>
                        </UserProvider>
                    </BoardProvider>
                </LevelsProvider>
            </GameProvider>
        </Router>
    );
}
