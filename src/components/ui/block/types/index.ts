import { HTMLAttributes } from 'react';

export type BlockProps = Omit<HTMLAttributes<HTMLDivElement>, 'css'> & {
    width?: string;
    height?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    border?: string;
    borderRadius?: string;
};
