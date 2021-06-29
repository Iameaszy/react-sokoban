import { gameCharacters } from './../constants/index';

export type Props = {};

export type Directions = {
    ArrowUp: 1;
    ArrowDown: 2;
    ArrowLeft: 3;
    ArrowRight: 4;
};

export enum GameState {
    PlAYING = 'playing',
    PAUSED = 'pused',
    STOPPED = 'stopped',
    LOADED = 'loaded',
    WON = 'won',
    LOOOSE = 'loose',
}

export type GameCharacters = typeof gameCharacters[keyof typeof gameCharacters];
