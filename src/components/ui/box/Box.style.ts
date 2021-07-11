import styled from 'styled-components/macro';
import { CenterElement } from '../../../utils/centerElement';
import { StyledSpace } from '../space/Space.style';
import { BoxProps } from './types';

export const StyledBox = styled(StyledSpace)<BoxProps>`
    &&& {
        border: solid ${(prop) => prop.border || 'green'};
        background: transparent;
        border-radius: 5px;

        ${CenterElement}
    }
`;
