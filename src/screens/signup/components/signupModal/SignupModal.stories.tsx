import React from 'react';
import { Meta } from '@storybook/react';
import { StyledHome } from '../../../home/Home.style';
import SignupModalComponent from '.';

export default {
    title: 'Screens/Home/SignupModal',
    component: SignupModalComponent,
} as Meta;

export const SignupModal = () => (
    <StyledHome>
        <SignupModalComponent />
    </StyledHome>
);
