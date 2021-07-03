import { HTMLAttributes } from 'react';

export type FormInputProps = Omit<HTMLAttributes<HTMLInputElement>, 'css'> & {
    placeholder?: string;
    value: string;
    handleInputChange: (value: string) => void;
    width?: string;
    height?: string;
    padding?: string;
};
