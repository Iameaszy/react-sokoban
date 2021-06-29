import { boardBackground } from './../../assets/images';
import styled from 'styled-components/macro';
import { Box } from '../ui/box';

export const StyledBoard = styled.div`
    background: white;
    background-image: url(${boardBackground});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const CharacterContainer = styled.div`
    display: inline-block;
    width: 30px;
    height: 30px;
`;

export const StyledRow = styled.div`
    display: flex;
`;
