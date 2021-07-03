import { HTMLAttributes } from 'react';

export type Control = {
    text: string;
    path?: string;
};

export type GameControlsProps = Omit<HTMLAttributes<HTMLDivElement>, 'css'> & {
    width?: string;
    height?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    border?: string;
    borderRadius?: string;
    controls: Control[];
};
