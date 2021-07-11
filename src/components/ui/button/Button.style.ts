import styled from 'styled-components/macro';
import { ButtonProps } from './types';

export const StyledButton = styled.button<Omit<ButtonProps, 'text'>>`
    min-width: 10px;
    min-height: 10px;
    background-color: ${({ backgroundColor }) => backgroundColor || 'blue'};
    color: ${({ color }) => color || 'white'};
    border: none;
    border-radius: 3px;
    cursor: pointer;
`;
