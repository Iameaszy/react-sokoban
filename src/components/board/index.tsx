import React, { ReactElement, useEffect, useState } from 'react';
import { useBoard } from '../../providers/board-provider';
import { useGameManager } from '../../providers/game-provider';
import { Directions, GameCharacters } from '../../providers/game-provider/types';
import { Cast } from '../../utils/cast';
import { CharacterContainer, StyledBoard, StyledRow } from './Board.style';
import { getCharacter } from './utils/getCharacter';

export const Board = (): ReactElement => {
    const gameManager = useGameManager();
    const board = useBoard();
    const [gameError, setGameError] = useState<string>('');

    useEffect(() => {
        async function initialiseGame() {
            try {
                await gameManager.initializeGame();
                gameManager.selectLevel(1);
                gameManager.startGame();
                window.addEventListener('keyup', keyup);
            } catch (err) {
                setGameError(err.message);
            }
        }

        const keyup = (ev: KeyboardEvent) => {
            gameManager.move(Cast<keyof Directions>(ev.key));
        };

        initialiseGame();
        return () => window.removeEventListener('keyup', keyup);
    }, []);

    return (
        <StyledBoard>
            {board.map((row, index) => (
                <StyledRow key={index}>
                    {row.map((col: GameCharacters, index) => (
                        <CharacterContainer key={index}>{getCharacter(col)}</CharacterContainer>
                    ))}
                </StyledRow>
            ))}
        </StyledBoard>
    );
};
