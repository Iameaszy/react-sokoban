import React, { ReactElement } from 'react';
import { StyledButton } from './Button.style';
import { ButtonProps } from './types';

export const Button = ({ text, ...rest }: ButtonProps): ReactElement => <StyledButton {...rest}>{text}</StyledButton>;
