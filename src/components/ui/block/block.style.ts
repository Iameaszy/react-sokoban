import { boardBlock } from './../../../assets/images';
import { BlockProps } from './types/index';
import styled from 'styled-components/macro';

export const StyledBlock = styled.div<BlockProps>`
    width: ${(props) => props.width || '30px'};
    height: ${(props) => props.height || '30px'};
    border: none;
    background-color: #944b25;
    background-image: url(${boardBlock});
    background-size: contain;
`;
