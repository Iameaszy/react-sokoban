import { StyledSpace } from './../space/Space.style';
import styled from 'styled-components/macro';

export const StyledBoxOnCheckpoint = styled(StyledSpace)`
    &&& {
        border: solid green;
        background: transparent;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
