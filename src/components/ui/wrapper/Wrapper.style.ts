import styled from 'styled-components/macro';
import { WrapperProps } from './types';

export const StyledWrapper = styled.div<WrapperProps>`
    background-color: ${({ backgroundColor }) => backgroundColor || 'black'};
    background-color: ${({ backgroundImage }) => backgroundImage || ''};
    width: ${({ width }) => width || '50px'};
    height: ${({ height }) => height || '50px'};
`;
