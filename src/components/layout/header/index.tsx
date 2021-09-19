import React, { ReactElement, useEffect } from 'react';
import { useStage } from '../../../providers/game-provider';
import { useUser } from '../../../providers/user-provider';
import { Storage } from '../../../utils/storage';
import {
    BarWrapper,
    NameBar,
    ScoreBar,
    StyledHeader,
    TimeBar,
    StageBar,
    NameStageBarWrapper,
    EquationsBar,
    EquationBar,
    EquationText,
    Plus
} from './Header.style';
import { Props } from './types';

export const Header = ({ ...rest }: Props): ReactElement => {
    const {name} = Storage.getUSer() || {};
    const {score,stage, time} = useUser();

    return (
        <StyledHeader {...rest}>
            <BarWrapper>
                <NameStageBarWrapper>
                    <NameBar>{name}</NameBar>
                    <StageBar>{stage}</StageBar>
                </NameStageBarWrapper>
                <ScoreBar>Scores: {score}</ScoreBar>
                <EquationsBar>
                    <EquationBar>
                        <EquationText>Eqn:</EquationText>
                        <span> 2x + 3(7) = 8</span>
                    </EquationBar>
                    {/* <EquationBar>
                        <EquationText>Eqn 2:</EquationText>
                        <span>y = 7</span>
                    </EquationBar> */}
                    {/* <EquationBar>
                        <EquationText>Result:</EquationText>
                        <span>?? = ??</span>
                    </EquationBar> */}
                    {/* <Plus>+</Plus> */}
                </EquationsBar>
                <TimeBar>{time}</TimeBar>
            </BarWrapper>
        </StyledHeader>
    );
};
