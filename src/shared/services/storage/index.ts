class AppStorage {
    private storage: Storage;
    constructor(storage?: Storage) {
        this.storage = storage || window.localStorage;
    }

    public set(key: string, value: any) {
        this.storage.setItem(key, value);
    }

    public get(key: string): string|null {
        return this.storage.getItem(key);
    }
}

const appStorage = new AppStorage();

export { appStorage };