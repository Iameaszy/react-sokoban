import styled from 'styled-components/macro';
import { StyledSpace } from '../space/Space.style';

export const StyledBoxOnCheckpoint = styled(StyledSpace)`
    &&& {
        border: solid violet;
        background: transparent;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
