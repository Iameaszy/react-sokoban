import { HTMLAttributes } from 'react';

export type BoxOnCheckpointProps = Omit<HTMLAttributes<HTMLDivElement>, 'css'> & {
    width?: string;
    height?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    border?: string;
    borderRadius?: string;
};
