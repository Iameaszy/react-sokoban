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
    Plus,
    EquationResult,
    EquationsTitle,
    StyledHeroContent,
    EquationOneTwoWrapper,
} from './Hero.style';
import { Props } from './types';

export const Hero = ({ title, body, mission, equations, heroHandler }: Props): ReactElement => {
    const stage = useStage();
    const [equation1, equation2] = equations;
    return (
        <StyledHero>
            <StyledHeroContent>
                <EquationsWrapper>
                    <EquationsTitle>Equations: </EquationsTitle>
                    <EquationOneTwoWrapper>
                        <Equation>{equation1}</Equation>
                        <Equation> {equation2}</Equation>
                        {/*<EquationResult>?? = ??</EquationResult>*/}
                    </EquationOneTwoWrapper>
                    {/*<Plus>+</Plus>*/}
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
