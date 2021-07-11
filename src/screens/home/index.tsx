import React, { ReactElement } from 'react';
import { GameControls } from '../../components/game-controls';
import { gameControls } from './data';
import { StyledHome } from './Home.style';

export default function HomeScreen(): ReactElement {
    return (
        <StyledHome>
            <GameControls controls={gameControls} />
        </StyledHome>
    );
}
