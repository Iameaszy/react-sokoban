import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { FormInput as FormInputComponent } from '.';

export default {
    title: 'Components/ui/Input',
    component: FormInputComponent,
} as Meta;

export const Input = () => {
    const [value, setValue] = useState('Secondary');

    const handleInputChange = (value: string) => {
        console.log('value', value);
        setValue(value);
    };

    return <FormInputComponent handleInputChange={handleInputChange} value={value} placeholder="" />;
};
