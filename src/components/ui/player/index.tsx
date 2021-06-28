import { StyledPlayer } from './player.style';
import React, { ReactElement } from 'react';
import { PlayerProps } from './types';

export const Player = (props: PlayerProps): ReactElement => <StyledPlayer {...props} />;
