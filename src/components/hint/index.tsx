import React, { ReactElement } from 'react';
import { getRandomNumberBetween } from '../../utils/getRandomNumberBetween';
import { hints } from './data';
import { StyledHint, StyledTitle, StyledContent } from './Hint.style';

export const Hint = (): ReactElement => {
    const { length: hintsLength } = hints;

    return (
        <StyledHint>
            <StyledTitle>Hints</StyledTitle>
            <StyledContent>{hints[getRandomNumberBetween(0, hintsLength - 1)]}</StyledContent>
        </StyledHint>
    );
};
