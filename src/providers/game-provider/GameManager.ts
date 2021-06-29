import { Directions } from './types/index';
import { GameCharacters, GameState } from './types';
import { getLevels } from './../../utils';
import { gameCharacters } from './constants';
export class GameManager {
    levels: string[][][] = [];
    currentLevel = 0;
    gameStarted = false;
    gameState: GameState = GameState.STOPPED;
    board: GameCharacters[][] = [];
    checkPoints = 0;
    playerPos = [-1, -1];
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
        this.publishLevels();
    }

    public async quitGame() {
        this.initializeGame();
    }

    public selectLevel(level: number) {
        this.currentLevel = level;
        this.board = this.getBoard(level - 1);
        this.playerPos = this.getPlayerPositon();
    }

    public getBoard(level?: number) {
        if (typeof level !== 'undefined' && level >= 0) {
            return (this.levels[level] as GameCharacters[][]) || ([] as GameCharacters[][]);
        }
        return this.board;
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

    private getNextPosition(currentPosition: number[], direction: keyof Directions) {
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

    private movePlayer(nextTile: number[]) {
        const player = this.getBoardTile(this.playerPos);

        if (player === gameCharacters.player) {
            this.moveCharacter(this.playerPos, gameCharacters.space);
        } else if (player === gameCharacters.playerOnCheckpoint) {
            this.moveCharacter(this.playerPos, gameCharacters.checkpoint);
        }

        this.moveCharacter(nextTile, gameCharacters.player);
        this.setPlayerPosition(nextTile);
    }

    private pushBox(boxPosition: number[], direction: keyof Directions) {
        const nextTile = this.getNextPosition(boxPosition, direction);
        const nextCharacter = this.getBoardTile(nextTile);

        if (nextCharacter === gameCharacters.checkpoint) {
            this.moveCharacter(nextTile, gameCharacters.boxOnCheckpoint);
            this.movePlayer(boxPosition);
        } else if (nextCharacter === gameCharacters.space) {
            this.moveCharacter(nextTile, gameCharacters.box);
            this.movePlayer(boxPosition);
        }
    }

    private pushBoxOnCheckpoint(boxPosition: number[], direction: keyof Directions) {
        const nextTile = this.getNextPosition(boxPosition, direction);
        const nextCharacter = this.getBoardTile(nextTile);

        if (nextCharacter === gameCharacters.checkpoint) {
            this.moveCharacter(nextTile, gameCharacters.boxOnCheckpoint);
            this.movePlayer(boxPosition);
        } else if (nextCharacter === gameCharacters.space) {
            this.moveCharacter(nextTile, gameCharacters.box);
            this.movePlayer(boxPosition);
        }
    }

    public setCheckPoints() {
        this.checkPoints = this.board.reduce((checkpoint, row) => {
            return checkpoint + row.filter((col) => col === '.').length;
        }, this.checkPoints);
    }

    public move(direction: keyof Directions) {
        if (this.gameState !== GameState.PlAYING) return;
        const nextTile = this.getNextPosition(this.playerPos, direction);
        const nextCharacter = this.getBoardTile(nextTile);

        switch (nextCharacter) {
            case gameCharacters.space:
                this.movePlayer(nextTile);
                break;
            case gameCharacters.box:
                this.pushBox(nextTile, direction);
                break;
            case gameCharacters.boxOnCheckpoint:
                this.pushBoxOnCheckpoint(nextTile, direction);
        }

        this.publishBoard();
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
