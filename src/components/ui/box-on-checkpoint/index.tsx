import React, { ReactElement } from 'react';
import { StyledBoxOnCheckpoint } from './BoxOnCheckpoint.style';
import { BoxOnCheckpointProps } from './types';
import { Checkpoint } from '../checkpoint';

export const BoxOnCheckpoint = (props: BoxOnCheckpointProps): ReactElement => (
    <StyledBoxOnCheckpoint {...props}>
        <Checkpoint backgroundColor="violet">y</Checkpoint>
    </StyledBoxOnCheckpoint>
);


export const BlackBoxOnCheckpoint = (props: BoxOnCheckpointProps): ReactElement => (
    <StyledBoxOnCheckpoint {...props}>
        <Checkpoint backgroundColor="black"></Checkpoint>
    </StyledBoxOnCheckpoint>
);
