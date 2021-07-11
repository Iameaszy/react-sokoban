import styled from 'styled-components/macro';
import { StyledWrapper } from '../ui/wrapper/Wrapper.style';

export const StyledGameContols = styled(StyledWrapper)`
    &&& {
        background-color: transparent;
        position: relative;
    }
`;

export const StyledControlWrapper = styled.div`
    position: absolute;
    top: 11rem;
    left: 0;
    right: 0;
    padding: 0rem 9.1rem;
`;

export const StyledControlBtnWrapper = styled.div`
    margin-bottom: 10px;
`;
