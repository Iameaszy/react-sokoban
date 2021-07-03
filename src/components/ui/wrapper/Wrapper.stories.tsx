import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Wrapper as WrapperComponent } from '.';
import { WrapperProps } from './types';

export default {
    title: 'Components/ui/Wrapper',
    component: WrapperComponent,
} as Meta;

const Template: Story<WrapperProps> = (args) => <WrapperComponent {...args} />;

export const Wrapper = Template.bind({});
Wrapper.args = { width: '30px', height: '30px', border: 'solid' };
