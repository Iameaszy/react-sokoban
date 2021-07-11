import React, { ReactElement } from 'react';
import { StyledModal } from './Modal.style';
import { Props } from './types';

StyledModal.setAppElement('#root');

export const Modal = ({ modalIsOpen, children, closeModal, label }: Props): ReactElement => (
    <StyledModal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel={label}>
        {children}
    </StyledModal>
);
