import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { GameControls as GameComponent } from '.';
import { GameControlsProps } from './types';

export default {
    title: 'Components/GameControls',
    component: GameComponent,
} as Meta;

const Template: Story<GameControlsProps> = (args) => (
    <MemoryRouter>
        <GameComponent {...args} />
    </MemoryRouter>
);

export const GameControls = Template.bind({});
GameControls.args = {
    controls: [{ text: 'PLAY', path: '/playgrund' }, { text: 'SETTINGS' }, { text: 'CREDITS' }, { text: 'EXIT' }],
};
