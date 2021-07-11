import styled from 'styled-components/macro';
import { boardBackground } from '../../assets/images/index';
import { StyledWrapper } from '../../components/ui/wrapper/Wrapper.style';

export const StylePlayground = styled(StyledWrapper)`
    &&& {
        background-image: url(${boardBackground});
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
    }
`;
