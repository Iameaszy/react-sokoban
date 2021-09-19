import { Directions, GameCharacters, GameState } from './types/index';

import { getLevels } from '../../utils';
import { gameCharacters } from './constants';
import equations from "../../assets/equations.json";

export class GameManager {
    levels: string[][][] = [];

    currentLevel = 0;

    gameStarted = false;

    gameState: GameState = GameState.STOPPED;

    board: GameCharacters[][] = [];

    checkPoints = 0;

    equations  = {};

    playerPos = [-1, -1];

    stage: number = 1;

    playerName = '';

    timer: any = null;

    private hasWon = false;

    heroOn = false;

    currentTime = 0;

    stageCallbacks: { (value: number): void }[] = [];

    boardCallbacks: { (value: GameCharacters[][]): void }[] = [];

    levelsCallbacks: { (value: string[][][]): void }[] = [];

    public async initializeGame(): Promise<void> {
        this.levels = [];
        this.board = [];
        this.gameState = GameState.STOPPED;
        this.playerPos = [-1, -1];
        this.currentLevel = -1;

        await this.load();
    }

    public async startGame() {
        this.gameState = GameState.PlAYING;
    }

    private async load() {
        this.levels = await getLevels();
        this.equations = equations[0];
        this.publishLevels();
    }

    public async quitGame() {
        this.initializeGame();
    }

    public selectLevel(level: number) {
        this.currentLevel = level;
        this.board = this.getBoard(level - 1);
        this.playerPos = this.getPlayerPositon();
        this.publishBoard();
    }

    public getBoard(level?: number) {
        if (typeof level !== 'undefined' && level >= 0) {
            return (this.levels[level] as GameCharacters[][]) || ([] as GameCharacters[][]);
        }
        return this.board;
    }

    public getEquations() {
        return this.equations;
    }

    public resetLevel() {
        this.board = this.getBoard(this.currentLevel);
        this.playerPos = this.getPlayerPositon();
    }

    public setPlayerPosition(pos: number[]) {
        this.playerPos = pos;
    }

    private getPlayerPositon() {
        return this.board.reduce((pos, board, index) => {
            const playerPos = board.findIndex((col) => col === '@');
            return playerPos !== -1 ? [index, playerPos] : pos;
        }, this.playerPos);
    }

    public checkPlayeHasWon() {
        return this.hasWon;
    }

    private static getNextPosition(currentPosition: number[], direction: keyof Directions) {
        const [row, col] = currentPosition;
        switch (direction) {
            case 'ArrowUp':
                return [row - 1, col];
            case 'ArrowDown':
                return [row + 1, col];
            case 'ArrowLeft':
                return [row, col - 1];
            case 'ArrowRight':
                return [row, col + 1];
            default:
                return currentPosition;
        }
    }

    private getBoardTile(position: number[]) {
        const [row, col] = position;
        return this.board[row][col];
    }

    private moveCharacter(position: number[], character: GameCharacters) {
        const [row, col] = position;
        this.board[row][col] = character;
    }

    private movePlayer(nextTile: number[], character?: GameCharacters) {
        const player = this.getBoardTile(this.playerPos);
        if (player === gameCharacters.player) {
            this.moveCharacter(this.playerPos, gameCharacters.space);
        } else if (player === gameCharacters.playerOnCheckpoint) {
            this.moveCharacter(this.playerPos, character || gameCharacters.checkpoint);
        }

        this.moveCharacter(nextTile, gameCharacters.player);
        this.setPlayerPosition(nextTile);
    }

    private pushBox(boxPosition: number[], direction: keyof Directions, box: GameCharacters) {
        const nextTile = GameManager.getNextPosition(boxPosition, direction);
        const nextCharacter = this.getBoardTile(nextTile);

        switch (nextCharacter) {
            case gameCharacters.checkpoint:
            case gameCharacters.blackCheckpoint:
            case gameCharacters.greenCheckpoint:
            case gameCharacters.orangeCheckpoint:
            case gameCharacters.redCheckpoint:
            case gameCharacters.xCheckpoint:
            case gameCharacters.yCheckpoint:
                this.moveCharacter(nextTile, gameCharacters.boxOnCheckpoint);
                this.movePlayer(boxPosition, gameCharacters.playerOnCheckpoint);
                break;
            case gameCharacters.space:
                this.moveCharacter(nextTile, box);
                this.movePlayer(boxPosition);
                break;
        }
    }

    private pushBoxOnCheckpoint(boxPosition: number[], direction: keyof Directions) {
        const nextTile = GameManager.getNextPosition(boxPosition, direction);
        const nextCharacter = this.getBoardTile(nextTile);

        switch (nextCharacter) {
            case gameCharacters.checkpoint:
            case gameCharacters.blackCheckpoint:
            case gameCharacters.greenCheckpoint:
            case gameCharacters.orangeCheckpoint:
            case gameCharacters.redCheckpoint:
            case gameCharacters.xCheckpoint:
            case gameCharacters.yCheckpoint:
                this.moveCharacter(nextTile, gameCharacters.boxOnCheckpoint);
                this.movePlayer(boxPosition);
                break;
            case gameCharacters.space:
                this.moveCharacter(nextTile, gameCharacters.box);
                this.movePlayer(boxPosition);
                break;
        }
    }

    public setCheckPoints() {
        this.checkPoints = this.board.reduce(
            (checkpoint, row) => checkpoint + row.filter((col) => col === '.').length,
            this.checkPoints,
        );
    }

    public move(direction: keyof Directions) {
        if (this.gameState !== GameState.PlAYING) return;
        const nextTile = GameManager.getNextPosition(this.playerPos, direction);
        const nextCharacter = this.getBoardTile(nextTile);

        switch (nextCharacter) {
            case gameCharacters.space:
                this.movePlayer(nextTile);
                break;
            case gameCharacters.box:
            case gameCharacters.blackBox:
            case gameCharacters.orangeBox:
            case gameCharacters.greenBox:
            case gameCharacters.redBox:
            case gameCharacters.xBox:
            case gameCharacters.yBox:
                this.pushBox(nextTile, direction, nextCharacter);
                break;
            case gameCharacters.boxOnCheckpoint:
                this.pushBoxOnCheckpoint(nextTile, direction);
        }
        this.publishBoard();
        this.checkHasWon();
    }

    // Subscriptions
    subscribeToBoard(cb: (board: GameCharacters[][]) => void) {
        this.boardCallbacks.push(cb);
    }

    unsubscribeFromBoard = (callbackToRemove: (board: GameCharacters[][]) => void): void => {
        this.boardCallbacks = this.boardCallbacks.filter((callback) => callback !== callbackToRemove);
    };

    private publishBoard() {
        this.boardCallbacks.forEach((callback) => {
            callback([...this.board]);
        });
    }

    subscribeToStage(cb: (stage: number) => void) {
        this.stageCallbacks.push(cb);
    }

    unsubscribeFromStage = (callbackToRemove: (stage: number) => void): void => {
        this.stageCallbacks = this.stageCallbacks.filter((callback) => callback !== callbackToRemove);
    };

    private publishStage() {
        this.stageCallbacks.forEach((callback) => {
            callback(this.stage + 1);
        });
    }

    private countChar(char: string) {
        return this.board.reduce(
            (count, row) => count + row.reduce((count, col) => (col === char ? count + 1 : count), 0),
            0,
        );
    }

    private checkStage1HasWon() {
        const countCheckpoint = this.countChar(gameCharacters.checkpoint);
        const playerOnCheckpoint = this.countChar(gameCharacters.playerOnCheckpoint);
        if (countCheckpoint === playerOnCheckpoint) {
            this.publishStage();
        }
    }

    private checkHasWon() {
        if (this.stage === 1) {
            this.checkStage1HasWon();
        }
    }

    subscribeToLevels(cb: (levels: string[][][]) => void) {
        this.levelsCallbacks.push(cb);
    }

    unsubscribeFromLevels = (callbackToRemove: (levels: string[][][]) => void): void => {
        this.levelsCallbacks = this.levelsCallbacks.filter((callback) => callback !== callbackToRemove);
    };

    private publishLevels() {
        this.levelsCallbacks.forEach((callback) => {
            callback(this.levels);
        });
    }
}
