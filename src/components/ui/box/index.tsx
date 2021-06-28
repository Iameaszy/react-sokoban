import { StyledBox } from './box.style';
import React, { ReactElement } from 'react';
import { BoxProps } from './types';

export const Box = (props: BoxProps): ReactElement => <StyledBox {...props} />;
