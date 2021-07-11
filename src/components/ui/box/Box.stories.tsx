import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Box as BoxComponent } from '.';
import { BoxProps } from './types';

export default {
    title: 'Components/ui/Box',
    component: BoxComponent,
} as Meta;

const Template: Story<BoxProps> = (args) => <BoxComponent {...args}>X</BoxComponent>;

export const Box = Template.bind({});
Box.args = { width: '20px', height: '20px', border: 'solid' };
