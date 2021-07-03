import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button as ButtonComponent, ControlButton as ControlButtonComponent } from '.';
import { ButtonProps } from './types';

export default {
    title: 'Components/ui/Button',
    component: ButtonComponent,
} as Meta;

const Template: Story<ButtonProps> = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({});
Button.args = { height: '20px', text: 'Button' };

export const ControlButton: Story = () => <ControlButtonComponent text="Play" />;

ControlButton.storyName = 'I am the control button';
