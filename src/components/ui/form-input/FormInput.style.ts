import styled from 'styled-components/macro';
import { FormInputProps } from './types';

export const StyledFormInput = styled.input<Omit<FormInputProps, 'handleInputChange'>>`
    border: none;
    border-radius: 5px;
    padding: ${({ padding }) => padding || '8px'};
    width: ${({ width }) => width || 'unset'};
    height: ${({ height }) => height || 'unset'};
    outline: none;
`;
