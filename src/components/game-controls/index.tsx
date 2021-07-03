import React, { ReactElement } from 'react';
import { scrollImg } from '../../assets/images';
import { StyledControlWrapper, StyledGameContols, StyledControlBtnWrapper } from './GameControls.style';
import { GameControlsProps } from './types';
import { ControlButton } from '../ui/button';

export const GameControls = ({ controls, ...rest }: GameControlsProps): ReactElement | null => {
    if (controls.length) {
        return (
            <StyledGameContols {...rest}>
                <img src={scrollImg} alt="game control" />
                <StyledControlWrapper>
                    {controls.map(({ text, path }, index) => (
                        <StyledControlBtnWrapper key={index}>
                            <ControlButton text={text} path={path} />
                        </StyledControlBtnWrapper>
                    ))}
                </StyledControlWrapper>
            </StyledGameContols>
        );
    }

    return null;
};
