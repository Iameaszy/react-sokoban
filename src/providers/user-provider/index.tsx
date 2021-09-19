import { useGameManager } from '../game-provider/index';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Props } from './types';

type func<T>  = (value: T) => void;
const UserContext = createContext<{
    name: string;
    setName: func<string>
    score: number;
    setScore: func<number>;
    stage: number;
    setStage: func<number>,
    time: string;
    setTime: func<string>;
}|null>(null);

export const UserProvider: React.FC<Props> = ({ children }) => {
    const [name, setName] = useState("");
    const [score, setScore] = useState(0);
    const [stage, setStage] = useState(1);
    const [time, setTime] = useState("10:00:00");

    return <UserContext.Provider value={{
        name,
        setName,
        score,
        setScore,
        stage,
        setStage,
        time,
        setTime
    }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
    const user = useContext(UserContext);

    if (!user) {
        throw new Error('useUser must be used within UserProvider');
    }
    return user;
};
