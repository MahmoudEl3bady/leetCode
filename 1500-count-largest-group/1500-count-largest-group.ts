function countLargestGroup(n: number): number {
    const map: Map<number, number> = new Map();

    for (let i = 1; i <= n; i++) {
        let sum = 0, num = i;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        map.set(sum, (map.get(sum) ?? 0) + 1);
    }

    const maxSize = Math.max(...map.values());

    console.log(map);
    let res = 0;
    for (let count of map.values()) {
        if (count === maxSize) res++;
    }

    return res;
}