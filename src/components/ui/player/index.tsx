import { StyledPlayer } from './Player.style';
import React, { ReactElement } from 'react';
import { PlayerProps } from './types';

export const Player = (props: PlayerProps): ReactElement => <StyledPlayer {...props} />;
