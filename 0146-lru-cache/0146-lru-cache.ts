class LRUCache {
    cache: { [key: number]: number };
    capacity: number;
    mostRecent: number[];

    constructor(capacity: number) {
        this.cache = {};
        this.capacity = capacity;
        this.mostRecent = [];
    }

    get(key: number): number {
        if (key in this.cache) {
            // Move accessed key to the end to mark it as most recently used
            const index = this.mostRecent.findIndex(k => k === key);
            this.mostRecent.splice(index, 1);
            this.mostRecent.push(key); // re-add to end
            return this.cache[key];
        } else {
            return -1;
        }
    }

    put(key: number, value: number): void {

        if (key in this.cache) {
            this.mostRecent = this.mostRecent.filter(k => k !== key);
        } else if (Object.keys(this.cache).length === this.capacity) {
            const oldestKey = this.mostRecent.shift();
            delete this.cache[oldestKey!];
        }

        this.cache[key] = value;
        this.mostRecent.push(key);
    }
}

