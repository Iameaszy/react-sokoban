import React, { ReactElement } from 'react';
import { StyledWrapper } from './Wrapper.style';
import { WrapperProps } from './types';

export const Wrapper = (props: WrapperProps): ReactElement => <StyledWrapper {...props} />;
