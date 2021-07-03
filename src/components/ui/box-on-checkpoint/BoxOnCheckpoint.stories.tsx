import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BoxOnCheckpoint as BoxOnCheckpointBlock } from '.';
import { BoxOnCheckpointProps } from './types';

export default {
    title: 'Components/ui/BoxOnCheckpoint',
    component: BoxOnCheckpointBlock,
} as Meta;

const Template: Story<BoxOnCheckpointProps> = (args) => <BoxOnCheckpointBlock {...args} />;

export const BoxOnCheckpoint = Template.bind({});
BoxOnCheckpoint.args = { width: '20px', height: '20px', border: 'solid' };
