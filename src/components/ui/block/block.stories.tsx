import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Block as GameBlock } from '.';
import { BlockProps } from './types';

export default {
    title: 'Components/ui/Block',
    component: GameBlock,
} as Meta;

const Template: Story<BlockProps> = (args) => <GameBlock {...args} />;

export const Block = Template.bind({});
Block.args = { width: '30px', height: '30px', border: 'solid' };
