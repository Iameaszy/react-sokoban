import React, { ReactElement, useEffect, useState } from 'react';
import { useGameManager } from '../../providers/game-provider';
import { gameCharacters } from '../../providers/game-provider/constants';
import { DirectionEnum, GameCharacters } from '../../providers/game-provider/types';
import { Block } from '../ui/block';
import { Box } from '../ui/box';
import { Checkpoint } from '../ui/checkpoint';
import { Player } from '../ui/player';
import { CharacterContainer, Space, StyledBoard, StyledRow } from './board.style';

export const Board = (): ReactElement => {
    const gameManager = useGameManager();
    const [board, setBoard] = useState<GameCharacters[][]>([]);
    const [levels, setLevels] = useState<string[][][]>([]);
    const [gameError, setGameError] = useState<string>('');

    useEffect(() => {
        (async () => {
            try {
                await gameManager.initializeGame();
                gameManager.selectLevel(2);
                gameManager.startGame();
                setLevels(gameManager.levels);
                setBoard(gameManager.board);
            } catch (err) {
                setGameError(err.message);
            }
            //gameManager.selectLevel(1);
            //gameManager.startGame();
            //gameManager.move(DirectionEnum.RIGHT);
            //gameManager.move(DirectionEnum.RIGHT);
            //console.log({ gameManager });
        })();
    }, []);

    useEffect(() => {
        console.log('board', board);
    }, [board]);

    useEffect(() => {
        console.log('levels', levels);
    }, [levels]);

    const startGame = () => {
        setBoard(gameManager.board);
    };

    return (
        <StyledBoard>
            {board.map((row, index) => (
                <StyledRow key={index}>
                    {row.map((col) => {
                        switch (col) {
                            case '#':
                                return (
                                    <CharacterContainer>
                                        <Block />
                                    </CharacterContainer>
                                );
                            case '$':
                                return (
                                    <CharacterContainer>
                                        <Box />
                                    </CharacterContainer>
                                );
                            case '@':
                                return (
                                    <CharacterContainer>
                                        <Player />
                                    </CharacterContainer>
                                );
                            case ' ':
                                return (
                                    <CharacterContainer>
                                        <Space />
                                    </CharacterContainer>
                                );
                            case gameCharacters.checkpoint:
                                return (
                                    <CharacterContainer>
                                        <Checkpoint />
                                    </CharacterContainer>
                                );
                            default:
                                return <Box />;
                        }
                    })}
                </StyledRow>
            ))}
        </StyledBoard>
    );
};
