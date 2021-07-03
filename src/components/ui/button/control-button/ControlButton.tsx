import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { ButtonProps } from '../types';
import { StyledControlButton } from './ControlButton.style';

type ControlBtnProps = ButtonProps & { text: string; path?: string };

export const ControlButton = ({ text, path = '', ...rest }: ControlBtnProps): ReactElement => {
    if (path) {
        return (
            <Link to={path}>
                <StyledControlButton {...rest}>{text}</StyledControlButton>
            </Link>
        );
    }

    return <StyledControlButton {...rest}>{text}</StyledControlButton>;
};
