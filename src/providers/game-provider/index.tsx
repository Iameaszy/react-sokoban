import React, { createContext, useContext, useState } from 'react';
import { GameManager } from './GameManager';
import { Props } from './types';

const GameContext = createContext<GameManager | null>(null);

export const GameProvider: React.FC<Props> = ({ children }) => {
    const [gameManager] = useState(() => new GameManager());
    return <GameContext.Provider value={gameManager}>{children}</GameContext.Provider>;
};

export const useGameManager = (): GameManager => {
    const gameManager = useContext(GameContext);

    if (!gameManager) {
        throw new Error('useGameManager must be used within GameProvider');
    }
    return gameManager;
};
