import React, { ReactElement } from 'react';
import { StyledCheckpoint, StyledDot } from './Checkpoint.style';
import { CheckpointProps } from './types';

export const Checkpoint = (props: CheckpointProps): ReactElement => (
    <StyledCheckpoint {...props}>
        <StyledDot {...props} />
    </StyledCheckpoint>
);
