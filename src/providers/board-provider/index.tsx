import React, { createContext, useContext, useEffect, useState } from 'react';
import { useGameManager } from '../game-provider/index';
import { Props } from './types';
import { GameCharacters } from '../game-provider/types';

const BoardContext = createContext<GameCharacters[][] | null>(null);

export const BoardProvider: React.FC<Props> = ({ children }) => {
    const gameManager = useGameManager();
    const [board, setBoard] = useState<GameCharacters[][] | null>([]);

    useEffect(() => {
        const subscribeToBoard = (board: GameCharacters[][]) => setBoard(board);

        gameManager.subscribeToBoard(subscribeToBoard);
        return () => gameManager.unsubscribeFromBoard(subscribeToBoard);
    }, []);

    return <BoardContext.Provider value={board}>{children}</BoardContext.Provider>;
};

export const useBoard = (): GameCharacters[][] => {
    const board = useContext(BoardContext);

    if (!board) {
        throw new Error('useLevels must be used within BoardProvider');
    }
    return board;
};
