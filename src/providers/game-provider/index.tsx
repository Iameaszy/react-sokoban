import React, { createContext, useContext, useEffect, useState } from 'react';
import { GameManager } from './GameManager';
import { Props } from './types';

const GameContext = createContext<GameManager | null>(null);
const StageContext = createContext<number>(1);
export const useGameManager = (): GameManager => {
    const gameManager = useContext(GameContext);

    if (!gameManager) {
        throw new Error('useGameManager must be used within GameProvider');
    }
    return gameManager;
};
export const StageProvider: React.FC<Props> = ({ children }) => {
    const gameManager = useGameManager();
    const [stage, setStage] = useState<number>(1);

    useEffect(() => {
        const subscribeToStage = (stage: number) => setStage(stage);

        gameManager.subscribeToStage(subscribeToStage);
        return () => gameManager.unsubscribeFromStage(subscribeToStage);
    }, []);

    return <StageContext.Provider value={stage}>{children}</StageContext.Provider>;
};

export const GameProvider: React.FC<Props> = ({ children }) => {
    const [gameManager] = useState(() => new GameManager());
    return (
        <GameContext.Provider value={gameManager}>
            <StageProvider>{children}</StageProvider>
        </GameContext.Provider>
    );
};
export const useStage = (): number => {
    const stage = useContext(StageContext);

    if (!stage) {
        throw new Error('useLevels must be used within StageProvider');
    }
    return stage;
};
