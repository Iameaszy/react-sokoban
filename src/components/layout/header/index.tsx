import React, { ReactElement, useEffect } from 'react';
import { useStage } from '../../../providers/game-provider';
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
} from './Header.style';
import { Props } from './types';

export const Header = ({ ...rest }: Props): ReactElement => {
    const stage = useStage();

    useEffect(() => {
        console.log('stage changed', stage);
    }, [stage]);

    const { name, score } = Storage.getPlayer();

    return (
        <StyledHeader {...rest}>
            <BarWrapper>
                <NameStageBarWrapper>
                    <NameBar>{name}</NameBar>
                    <StageBar>{`Stage ${stage}`}</StageBar>
                </NameStageBarWrapper>
                <ScoreBar>{160}</ScoreBar>
                <EquationsBar>
                    <EquationBar>
                        <EquationText>Eqn 1:</EquationText>
                        <span>2x + 3y = 8</span>
                    </EquationBar>
                    <EquationBar>
                        <EquationText>Eqn 2:</EquationText>
                        <span>3x + 2y = 7</span>
                    </EquationBar>
                </EquationsBar>
                <TimeBar>9:30:59</TimeBar>
            </BarWrapper>
        </StyledHeader>
    );
};
