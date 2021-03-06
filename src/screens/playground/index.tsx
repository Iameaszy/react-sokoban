import React, { ReactElement, useEffect, useState } from 'react';
import { Board } from '../../components/board';
import { Hero } from '../../components/hero';
import { useBoard } from '../../providers/board-provider';
import { useGameManager } from '../../providers/game-provider';
import { Directions } from '../../providers/game-provider/types';
import { Cast } from '../../utils/cast';
import { missions } from './data';
import { StylePlayground } from './Playground.style';

export default function Playground(): ReactElement {
    const gameManager = useGameManager();
    const board = useBoard();
    const [gameError, setGameError] = useState<string>('');
    const [stage, setStage] = useState(0);
    const equations = gameManager.getEquations();

    console.log({equations});
    useEffect(() => {
        const keyup = (ev: KeyboardEvent) => gameManager.move(Cast<keyof Directions>(ev.key));

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
        initialiseGame();
        return () => window.removeEventListener('keyup', keyup);
    }, []);

    return (
        <StylePlayground>
            <Board board={board} />
        </StylePlayground>
    );
}
