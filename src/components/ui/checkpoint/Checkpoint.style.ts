import styled from 'styled-components/macro';
import { CheckpointProps } from './types/index';
import { StyledSpace } from '../space/Space.style';
import { CenterElement } from '../../../utils/centerElement';

export const StyledCheckpoint = styled(StyledSpace)<CheckpointProps>`
    border: ${({ border }) => border || 'none'};
    ${CenterElement}
`;

export const StyledDot = styled.div<CheckpointProps>`
    width: ${(props) => props.width || '20px'};
    height: ${(props) => props.height || '20px'};
    border: none;
    background: ${(props) => props.backgroundColor || 'green'};
    border-radius: 100%;
    ${CenterElement};
`;
