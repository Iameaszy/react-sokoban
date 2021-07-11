import { HTMLAttributes } from 'react';

export type SignupModalProps = Omit<HTMLAttributes<HTMLDivElement>, 'css'> & {
    closeModal: () => void;
    modalIsOpen: boolean;
    handleNameChange: () => void;
    name: string;
};
