import styled from 'styled-components/macro';
import { StyledButton } from '../Button.style';

export const StyledControlButton = styled(StyledButton)`
    &&& {
        height: 3.5rem;
        width: 16rem;
        border-radius: 10px;
        box-shadow: 0 0 0px #fff, 1px 3px 4px #000;
        font-size: 1.5rem;
        background-color: #8c2b14;
        cursor: pointer;
        transition: 0.5s all;

        &:hover {
            background-color: #df4723;
        }
    }
`;
