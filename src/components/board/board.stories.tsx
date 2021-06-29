// Button.stories.js

import React from 'react';
import { Meta } from '@storybook/react';

import { Board as GameBoard } from './index';
import { GameProvider } from '../../providers/game-provider';
import { LevelsProvider } from '../../providers/levels-provider';
import { BoardProvider } from '../../providers/board-provider';

export default {
    title: 'Components/Board',
    component: GameBoard,
} as Meta;

export const Board: React.VFC<Record<string, never>> = () => (
    <GameProvider>
        <LevelsProvider>
            <BoardProvider>
                <GameBoard />
            </BoardProvider>
        </LevelsProvider>
    </GameProvider>
);
