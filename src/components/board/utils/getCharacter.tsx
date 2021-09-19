import React from 'react';
import { gameCharacters } from '../../../providers/game-provider/constants';
import { GameCharacters } from '../../../providers/game-provider/types';
import { Block } from '../../ui/block';
import { Box } from '../../ui/box';
import { BlackBoxOnCheckpoint, BoxOnCheckpoint } from '../../ui/box-on-checkpoint';
import { Checkpoint } from '../../ui/checkpoint';
import { Player } from '../../ui/player';
import { Space } from '../../ui/space';

export const getCharacter = (character: GameCharacters) => {
    switch (character) {
        case gameCharacters.block:
            return <Block />;
        case gameCharacters.box:
            return <Box />;
        case gameCharacters.blackBox:
            return <Box border="black" />;
        case gameCharacters.redBox:
            return <Box border="red" />;
        case gameCharacters.greenBox:
            return <Box border="green" />;
        case gameCharacters.orangeBox:
            return <Box border="orange" />;
        case gameCharacters.xBox:
            return <Box border="violet">X</Box>;
        case gameCharacters.yBox:
            return <Box border="violet">Y</Box>;
        case gameCharacters.player:
            return <Player />;
        case gameCharacters.space:
            return <Space />;
        case gameCharacters.checkpoint:
            return <Checkpoint />;
        case gameCharacters.xCheckpoint:
            return <Checkpoint backgroundColor="violet" />;
        case gameCharacters.yCheckpoint:
            return <Checkpoint backgroundColor="violet" />;
        case gameCharacters.blackCheckpoint:
            return <Checkpoint backgroundColor="black" />;
        case gameCharacters.greenCheckpoint:
            return <Checkpoint backgroundColor="green" />;
        case gameCharacters.orangeCheckpoint:
            return <Checkpoint backgroundColor="orange" />;
        case gameCharacters.redCheckpoint:
            return <Checkpoint backgroundColor="red" />;
        case gameCharacters.boxOnCheckpoint:
            return <BoxOnCheckpoint />;
        case gameCharacters.blackBoxOnCheckpoint:
            return <BlackBoxOnCheckpoint />;
    }
};
