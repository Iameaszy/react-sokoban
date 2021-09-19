const KEY = "user";
export class Storage {
    public static setUser<T>(value: T) {
        localStorage.setItem(KEY, JSON.stringify(value));
    }

    public static getUSer<T>(): T|null {
        const playerString = localStorage.getItem(KEY);
        if (!playerString) return null;

        return JSON.parse(playerString) as T;
    }
}
