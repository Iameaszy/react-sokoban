import { useGameManager } from '../game-provider/index';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Props } from './types';

const LevelsContext = createContext<string[][][] | null>(null);

export const LevelsProvider: React.FC<Props> = ({ children }) => {
    const gameManager = useGameManager();
    const [levels, setLevels] = useState<string[][][] | null>([]);

    useEffect(() => {
        const subscribeToLevels = (levels: string[][][]) => {
            setLevels(levels);
        };
        gameManager.subscribeToLevels(subscribeToLevels);
        return () => gameManager.unsubscribeFromLevels(subscribeToLevels);
    });

    return <LevelsContext.Provider value={levels}>{children}</LevelsContext.Provider>;
};

export const useLevels = (): string[][][] => {
    const levels = useContext(LevelsContext);

    if (!levels) {
        throw new Error('useLevels must be used within LevelsProvider');
    }
    return levels;
};
