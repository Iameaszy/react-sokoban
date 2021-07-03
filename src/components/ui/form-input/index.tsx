import React, { ChangeEvent, ReactElement } from 'react';
import { StyledFormInput } from './FormInput.style';
import { FormInputProps } from './types';

export const FormInput = ({ handleInputChange, ...rest }: FormInputProps): ReactElement => {
    const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
        handleInputChange(ev.target.value);
    };

    return <StyledFormInput {...rest} onChange={onChange} />;
};
