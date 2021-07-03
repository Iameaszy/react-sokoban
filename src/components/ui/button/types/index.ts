import { HTMLAttributes } from 'react';

export type ButtonProps = Omit<HTMLAttributes<HTMLButtonElement>, 'css'> & {
    text: string;
};
