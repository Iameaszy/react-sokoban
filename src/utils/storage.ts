import { Cast } from './cast';
import { Player } from './types';

const KEY = 'player';

export class Storage {
    public static init() {
        Storage.setPlayer({ name: '', score: 0 });
    }

    public static setPlayer(player: Player) {
        localStorage.setItem(KEY, JSON.stringify(player));
    }

    public static getPlayer() {
        return JSON.parse(localStorage.getItem(KEY)!) as Player;
    }

    public static setItem(key: keyof Player, value: string | number): Player | null {
        const playerString = localStorage.getItem(KEY);
        if (!playerString) return Cast(playerString);

        const player = JSON.parse(playerString) as Player;
        Storage.setPlayer({ ...player, [key]: value });

        return player;
    }

    public static getItem(key: keyof Player): string | number {
        const playerString = localStorage.getItem(KEY);
        if (!playerString) return Cast(playerString);

        const player = JSON.parse(playerString) as Player;

        return player[key];
    }
}