import React, { ReactElement } from 'react';
import { StyledBox } from './Box.style';
import { BoxProps } from './types';

export const Box = ({ children, ...rest }: BoxProps): ReactElement => <StyledBox {...rest}>{children}</StyledBox>;
