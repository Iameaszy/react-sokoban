import React, { ReactElement } from 'react';
import { StyledBoxOnCheckpoint } from './BoxOnCheckpoint.style';
import { BoxOnCheckpointProps } from './types';
import { Checkpoint } from '../checkpoint';

export const BoxOnCheckpoint = (props: BoxOnCheckpointProps): ReactElement => (
    <StyledBoxOnCheckpoint {...props}>
        <Checkpoint backgroundColor="violet">X</Checkpoint>
    </StyledBoxOnCheckpoint>
);
