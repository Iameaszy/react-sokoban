import styled from 'styled-components/macro';
import { WrapperProps } from './types';

export const StyledWrapper = styled.div<WrapperProps>`
    background-color: ${({ backgroundColor }) => backgroundColor || 'black'};
    background-image: ${({ backgroundImage }) => backgroundImage || ''};
`;
