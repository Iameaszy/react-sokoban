import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Header as HeaderComponent } from '.';
import { Props } from './types';

export default {
    title: 'Components/layout/Header',
    component: HeaderComponent,
} as Meta;

const Template: Story<Props> = (args) => <HeaderComponent {...args}>X</HeaderComponent>;

export const Header = Template.bind({});
Header.args = {};
