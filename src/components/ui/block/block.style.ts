import { StyledSpace } from './../space/space.style';
import styled from 'styled-components/macro';
import { boardBlock } from '../../../assets/images';

export const StyledBlock = styled(StyledSpace)`
    background-color: #934b25;
    background-image: url(${boardBlock});
`;
