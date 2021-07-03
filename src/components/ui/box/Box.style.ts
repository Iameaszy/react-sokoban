import styled from 'styled-components/macro';
import { StyledSpace } from '../space/Space.style';

export const StyledBox = styled(StyledSpace)`
    &&& {
        border: solid green;
        background: transparent;
        border-radius: 5px;
    }
`;
