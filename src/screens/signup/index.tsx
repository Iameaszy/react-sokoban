import React, { ReactElement, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Storage } from '../../utils/storage';
import {
    StyledSignupScreen,
    StyledContinueBtn,
    StyledExitBtn,
    StyledSignupFormNameInput,
    ExitContinueBtnWrapper,
    ContentWrapper,
} from './Signup.style';

export default function SignupScreen(): ReactElement {
    const history = useHistory();
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);

    const handleNameChange = (name: string) => setName(name);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (name) {
            Storage.setItem('name', name);
            history.push('/playground');
        }
    };

    return (
        <StyledSignupScreen>
            <ContentWrapper>
                <form onSubmit={handleSubmit}>
                    <StyledSignupFormNameInput
                        handleInputChange={handleNameChange}
                        placeholder="Name"
                        value={name}
                        autoFocus
                    />
                    <ExitContinueBtnWrapper>
                        <StyledContinueBtn text="Proceed" type="submit" />
                        <StyledExitBtn to="/">Exit</StyledExitBtn>
                    </ExitContinueBtnWrapper>
                </form>
            </ContentWrapper>
        </StyledSignupScreen>
    );
}
