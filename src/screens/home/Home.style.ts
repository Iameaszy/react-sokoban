import styled from 'styled-components/macro';
import { boardBackground } from '../../assets/images/index';
import { StyledWrapper } from '../../components/ui/wrapper/Wrapper.style';

export const StyleHome = styled(StyledWrapper)`
    &&& {
        background-image: url(${boardBackground});
        width: 100%;
    }
`;
