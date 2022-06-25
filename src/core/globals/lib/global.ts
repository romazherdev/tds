export abstract class Global {
    private static map = new Map<string, any>();

    public static set<T>(key: string, value: T): void {
        Global.map.set(key, value);
    }

    public static get<T>(key: string): T {
        return Global.map.get(key);
    }
}
