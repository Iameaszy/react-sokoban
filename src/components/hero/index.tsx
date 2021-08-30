import React, { ReactElement } from 'react';
import { useStage } from '../../providers/game-provider';
import {
    StyledHero,
    Title,
    Body,
    Mission,
    H3,
    MissionWrapper,
    Button,
    EquationsWrapper,
    Equation,
    EquationsTitle,
    StyledHeroContent,
    EquationOneTwoWrapper,
} from './Hero.style';
import { Props } from './types';

export const Hero = ({ title, body, mission, equations, heroHandler }: Props): ReactElement => {
    const stage = useStage();

    return (
        <StyledHero>
            <StyledHeroContent>
                <EquationsWrapper>
                    <EquationsTitle>Equations: </EquationsTitle>
                    <EquationOneTwoWrapper>
                        <Equation>2x + 3y = 8</Equation>
                        <Equation>3x + 2y = 7</Equation>
                    </EquationOneTwoWrapper>
                </EquationsWrapper>
                <Title>{title}</Title>
                <Body>{body}</Body>

                <MissionWrapper>
                    <H3>MISSION</H3>
                    <Mission>{mission}</Mission>
                </MissionWrapper>

                <Button onClick={heroHandler}>Start</Button>
            </StyledHeroContent>
        </StyledHero>
    );
};
