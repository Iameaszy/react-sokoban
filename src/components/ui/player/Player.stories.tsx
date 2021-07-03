import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Player as PlayerBlock } from '.';
import { PlayerProps } from './types';

export default {
    title: 'Components/ui/Player',
    component: PlayerBlock,
} as Meta;

const Template: Story<PlayerProps> = (args) => <PlayerBlock {...args} />;

export const Player = Template.bind({});
Player.args = { width: '50px', height: '50px', border: 'solid' };
