import React, { ReactElement } from 'react';
import { getRandomNumberBetween } from '../../utils/getRandomNumberBetween';
import { hints } from './data';
import { StyledSteps, StyledTitle, StyledContent } from './Steps.style';

export const Steps = (): ReactElement => {
    const { length: hintsLength } = hints;

    return (
        <StyledSteps>
            <StyledTitle>Steps</StyledTitle>
            <StyledContent>{hints[getRandomNumberBetween(0, hintsLength - 1)]}</StyledContent>
        </StyledSteps>
    );
};
