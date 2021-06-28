import { HTMLAttributes } from 'react';

export type CheckpointProps = Omit<HTMLAttributes<HTMLDivElement>, 'css'> & {
    width?: string;
    height?: string;
    backgroundColor?: string;
    border?: string;
};
