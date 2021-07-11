import { HTMLAttributes } from 'react';

export type Props = Omit<HTMLAttributes<HTMLDivElement>, 'css'> & {
    closeModal: () => void;
    modalIsOpen: boolean;
    label: string;
};
