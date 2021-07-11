import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import { Button } from '../../components/ui/button';
import { FormInput } from '../../components/ui/form-input';
import { CenterElement } from '../../utils/centerElement';

export const StyledSignupScreen = styled.div`
    ${CenterElement};
    flex-direction: column;
    width: 100%;
    height: 78%;
`;
export const StyledSignupFormNameInput = styled(FormInput)`
    margin-bottom: 10px;
    margin-bottom: 30px;
    font-size: 18px;
    padding: 12px;
    width: 100%;
`;

const CommonBtnStyler = css`
    padding: 9px;
    width: 6rem;
    border-radius: 3px;
    transition: 0.3s all;
`;
export const StyledContinueBtn = styled(Button)`
    ${CommonBtnStyler};
    background: #2e8148;

    &:hover {
        background-color: #29643b;
    }
`;

export const StyledExitBtn = styled(Link)`
    ${CommonBtnStyler};
    background-color: #b54d4d;
    color: white;
    text-decoration: none;
    text-align: center;

    &:hover {
        background-color: #b82b2b;
    }
`;

export const ExitContinueBtnWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const ContentWrapper = styled.div`
    width: 22rem;
`;
