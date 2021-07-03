import React from 'react';
import { gameCharacters } from '../../../providers/game-provider/constants';
import { GameCharacters } from '../../../providers/game-provider/types';
import { Block } from '../../ui/block';
import { Box } from '../../ui/box';
import { BoxOnCheckpoint } from '../../ui/box-on-checkpoint';
import { Checkpoint } from '../../ui/checkpoint';
import { Player } from '../../ui/player';
import { Space } from '../../ui/space';

export const getCharacter = (character: GameCharacters) => {
    switch (character) {
        case gameCharacters.block:
            return <Block />;
        case gameCharacters.box:
            return <Box />;
        case gameCharacters.player:
            return <Player />;
        case gameCharacters.space:
            return <Space />;
        case gameCharacters.checkpoint:
            return <Checkpoint />;
        case gameCharacters.boxOnCheckpoint:
            return <BoxOnCheckpoint />;
        default:
            return <Box />;
    }
};
