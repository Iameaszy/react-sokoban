import { CheckpointProps } from './types/index';
import styled from 'styled-components/macro';
import { Box } from '../box';

export const StyledCheckpoint = styled(Box)`
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledDot = styled.div<CheckpointProps>`
    width: ${(props) => props.width || '15px'};
    height: ${(props) => props.height || '15px'};
    border: none;
    background: green;
    border-radius: 100%;
`;
