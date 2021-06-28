import { HTMLAttributes } from 'react';

export type PlayerProps = Omit<HTMLAttributes<HTMLDivElement>, 'css'> & {
    width?: string;
    height?: string;
    backgroundColor?: string;
    border?: string;
};
