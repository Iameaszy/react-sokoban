import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkpoint as CheckpointBlock } from '.';
import { CheckpointProps } from './types';

export default {
    title: 'Components/ui/Checkpoint',
    component: CheckpointBlock,
} as Meta;

const Template: Story<CheckpointProps> = (args) => <CheckpointBlock {...args} />;

export const Checkpoint = Template.bind({});
Checkpoint.args = { width: '20px', height: '20px', border: 'solid' };
