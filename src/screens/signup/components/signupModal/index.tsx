import React, { ReactElement } from 'react';
import { SignupModalProps } from '../../props';

import {
    StyledSignupModal,
    StyledSignupFormNameInput,
    ExitContinueBtnWrapper,
    StyledExitBtn,
    StyledContinueBtn,
} from './SignupModal.style';

export default function SignupModal({
    modalIsOpen = true,
    closeModal,
    handleNameChange,
    name,
}: SignupModalProps): ReactElement {
    return (
        <StyledSignupModal isOpen={modalIsOpen} contentLabel="Signup Modal" onRequestClose={closeModal}>
            <form>
                <StyledSignupFormNameInput handleInputChange={handleNameChange} placeholder="Name" value={name} />
            </form>
            <ExitContinueBtnWrapper>
                <StyledContinueBtn text="Proceed" />
                <StyledExitBtn text="Exit" />
            </ExitContinueBtnWrapper>
        </StyledSignupModal>
    );
}
