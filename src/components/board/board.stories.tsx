// Button.stories.js

import React from 'react';
import { Meta } from '@storybook/react';

import { Board as GameBoard } from './index';
import { GameProvider } from '../../providers/game-provider';

export default {
    title: 'Components/Board',
    component: GameBoard,
} as Meta;

export const Board: React.VFC<Record<string, never>> = () => (
    <GameProvider>
        <GameBoard />
    </GameProvider>
);
