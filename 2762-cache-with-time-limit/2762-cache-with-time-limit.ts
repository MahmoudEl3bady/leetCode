interface CacheVal {
    value: number;
    timer: ReturnType<typeof setTimeout>
}

class TimeLimitedCache {
    map = new Map<number, CacheVal>();

    set(key: number, value: number, duration: number): boolean {
        const exists = this.map.has(key)
        if (exists) clearTimeout(this.map.get(key).timer)
        this.map.set(key, { value, timer: setTimeout(() => this.map.delete(key), duration) })
        return exists
    }

    get(key: number): number {
        if (this.map.has(key)) {
            return this.map.get(key).value;
        } else {
            return -1;
        }
    }

    count(): number {
        return this.map.size;
    }

}


/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
