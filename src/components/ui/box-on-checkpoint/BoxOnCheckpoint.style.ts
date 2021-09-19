import styled, {css} from 'styled-components/macro';
import { StyledSpace } from '../space/Space.style';

export const StyledBoxOnCheckpoint = styled(StyledSpace)<{$boxColor?: string}>`
    &&& {
        border: solid violet;
        ${(props)=> props.$boxColor && css`
            border: solid ${props.$boxColor}
        `};
        background: transparent;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
