import React, { ReactElement } from 'react';
import { useStage } from '../../providers/game-provider';
import { StyledHero, Title, Body, Mission, H3, MissionWrapper, Button } from './Hero.style';
import { Props } from './types';

export const Hero = ({ title, body, mission, equations, heroHandler }: Props): ReactElement => {
    const stage = useStage();

    return (
        <StyledHero>
            <Title>{title}</Title>
            <Body>{body}</Body>

            <MissionWrapper>
                <H3>MISSION</H3>
                <Mission>{mission}</Mission>
            </MissionWrapper>

            <Button onClick={heroHandler}>Start</Button>
        </StyledHero>
    );
};