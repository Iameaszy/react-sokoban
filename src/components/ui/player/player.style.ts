import { StyledSpace } from './../space/space.style';
import { playerImg } from '../../../assets/images';
import { PlayerProps } from './types/index';
import styled from 'styled-components/macro';

export const StyledPlayer = styled(StyledSpace)`
    border: none;
    background-image: url(${playerImg});
`;
