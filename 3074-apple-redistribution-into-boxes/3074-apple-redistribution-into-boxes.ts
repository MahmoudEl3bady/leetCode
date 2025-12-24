function minimumBoxes(apple: number[], capacity: number[]): number {
    const totalApples = apple.reduce((a, b) => a + b);
    capacity = capacity.sort((a, b) => a - b);
    let minBoxes = Number.MAX_VALUE;
    let prefix = [0];
    for (let i = 1; i <= capacity.length; i++) {
        prefix[i] = prefix[i - 1] + capacity[i-1];
    }

    for (let i = 0; i < prefix.length; i++) {
        for (let j = i + 1; j < prefix.length; j++) {
            if (prefix[j] - prefix[i] >= totalApples) {
                minBoxes = Math.min(minBoxes, j - i);
            }
        }
    }
    return minBoxes;
};