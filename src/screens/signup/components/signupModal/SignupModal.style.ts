import Modal from 'react-modal';
import styled from 'styled-components/macro';
import { Button } from '../../../../components/ui/button';
import { FormInput } from '../../../../components/ui/form-input/index';

Modal.setAppElement('#root');
export const StyledSignupModal = styled(Modal)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    flex-direction: column;
`;
export const StyledSignupFormNameInput = styled(FormInput)`
    margin-bottom: 10px;
    margin-bottom: 10px;
    width: 18rem;
`;
export const StyledContinueBtn = styled(Button)`
    background: black;
    padding: 6px;
`;

export const StyledExitBtn = styled(Button)`
    background: black;
    padding: 6px;
`;

export const ExitContinueBtnWrapper = styled.div`
    width: 18rem;
    display: flex;
    justify-content: space-between;
`;
