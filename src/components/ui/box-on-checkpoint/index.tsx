import { StyledBoxOnCheckpoint } from './BoxOnCheckpoint.style';
import React, { ReactElement } from 'react';
import { BoxOnCheckpointProps } from './types';
import { Checkpoint } from '../checkpoint';

export const BoxOnCheckpoint = (props: BoxOnCheckpointProps): ReactElement => (
    <StyledBoxOnCheckpoint {...props}>
        <Checkpoint />
    </StyledBoxOnCheckpoint>
);
