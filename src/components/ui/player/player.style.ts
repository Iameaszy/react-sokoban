import { playerImg } from '../../../assets/images';
import { PlayerProps } from './types/index';
import styled from 'styled-components/macro';

export const StyledPlayer = styled.div<PlayerProps>`
    width: ${(props) => props.width || '30px'};
    height: ${(props) => props.height || '30px'};
    border: none;
    background-image: url(${playerImg});
    background-repeat: no-repeat;
    background-size: contain;
`;
