import { StyledCheckpoint, StyledDot } from './Checkpoint.style';
import React, { ReactElement } from 'react';
import { CheckpointProps } from './types';

export const Checkpoint = (props: CheckpointProps): ReactElement => (
    <StyledCheckpoint>
        <StyledDot {...props} />
    </StyledCheckpoint>
);
