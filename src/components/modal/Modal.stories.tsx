import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import { Modal as ModalComponent } from './index';

export default {
    title: 'Components/Modal',
    component: ModalComponent,
} as Meta;

export const Modal = () => {
    const [modalIsOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    return (
        <>
            <button onClick={openModal} type="button">
                open modal
            </button>
            <ModalComponent label="Signup modal" modalIsOpen={modalIsOpen} closeModal={closeModal}>
                <button onClick={closeModal} type="button">
                    close modal
                </button>
            </ModalComponent>
        </>
    );
};
