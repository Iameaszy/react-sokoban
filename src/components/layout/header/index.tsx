import React, { ReactElement, useEffect } from 'react';
import { useStage } from '../../../providers/game-provider';
import { Storage } from '../../../utils/storage';
import { BarWrapper, NameBar, ScoreBar, StyledHeader, TimeBar, StageBar, NameStageBarWrapper } from './Header.style';
import { Props } from './types';

export const Header = ({ ...rest }: Props): ReactElement => {
    const stage = useStage();

    useEffect(() => {
        console.log('stage changed', stage);
    }, [stage]);

    // const { name, score } = Storage.getPlayer();

    return (
        <StyledHeader {...rest}>
            <BarWrapper>
                <NameStageBarWrapper>
                    <NameBar>{'Yusuf'}</NameBar>
                    <StageBar>{`Stage ${stage}`}</StageBar>
                </NameStageBarWrapper>
                <ScoreBar>0</ScoreBar>
                <TimeBar>00:29:59</TimeBar>
            </BarWrapper>
        </StyledHeader>
    );
};
