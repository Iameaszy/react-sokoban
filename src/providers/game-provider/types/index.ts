import { gameCharacters } from './../constants/index';
export type Props = {};

export type Directions = {
    arrowUp: 1;
    arrowDown: 2;
    arrowLeft: 3;
    arrowRight: 4;
};

export enum DirectionEnum {
    UP = 1,
    DOWN,
    LEFT,
    RIGHT,
}

export enum GameState {
    PlAYING = 'playing',
    PAUSED = 'pused',
    STOPPED = 'stopped',
    LOADED = 'loaded',
    WON = 'won',
    LOOOSE = 'loose',
}

export type GameCharacters = typeof gameCharacters[keyof typeof gameCharacters];
