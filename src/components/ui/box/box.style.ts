import { BoxProps } from './types/index';
import styled from 'styled-components/macro';

export const StyledBox = styled.div<BoxProps>`
    width: ${(props) => props.width || '30px'};
    height: ${(props) => props.height || '30px'};
    border: solid green;
    box-sizing: border-box;
    border-radius: 5px;
    background: ${(props) => props.backgroundColor};
`;
