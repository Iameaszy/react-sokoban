import { InputHTMLAttributes } from 'react';

export type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
    placeholder?: string;
    value: string;
    handleInputChange: (value: string) => void;
};
