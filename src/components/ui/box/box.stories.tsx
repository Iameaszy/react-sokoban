import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Box as CheckpointBlock } from '.';
import { BoxProps } from './types';

export default {
    title: 'Components/ui/Box',
    component: CheckpointBlock,
} as Meta;

const Template: Story<BoxProps> = (args) => <CheckpointBlock {...args} />;

export const Box = Template.bind({});
Box.args = { width: '20px', height: '20px', border: 'solid' };
