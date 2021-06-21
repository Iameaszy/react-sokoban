import { getLevels, getLevelsFileData } from './../../utils';

enum GameState {
    PlAYING,
    PAUSED,
    STOPPED,
}

export class GameManager {
    levels: string[][][] = [];
    currentLevel = -1;
    gameStarted = false;
    gameState: GameState = GameState.STOPPED;
    board: string[][] = [];

    public initializeGame(): void {
        this.levels = [];
        this.board = [];
        this.gameState = GameState.STOPPED;
    }

    public async load() {
        this.levels = await getLevels();
    }

    public async selectLevel(level: number) {
        this.currentLevel = level;
        this.board = this.getBoard(level);
    }

    private getBoard(level: number) {
        return this.levels[level];
    }
}
