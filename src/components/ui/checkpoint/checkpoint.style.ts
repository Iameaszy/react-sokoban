import { CheckpointProps } from './types/index';
import styled from 'styled-components/macro';
import { StyledSpace } from '../space/space.style';

export const StyledCheckpoint = styled(StyledSpace)`
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledDot = styled.div<CheckpointProps>`
    width: ${(props) => props.width || '20px'};
    height: ${(props) => props.height || '20px'};
    border: none;
    background: green;
    border-radius: 100%;
`;
