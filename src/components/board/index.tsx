import React, { ReactElement } from 'react';
import { GameProvider } from '../../providers/game-provider';
import { Wrapper } from './board.style';

export const Board = (): ReactElement => {
    return (
        <GameProvider>
            <Wrapper />
        </GameProvider>
    );
};
