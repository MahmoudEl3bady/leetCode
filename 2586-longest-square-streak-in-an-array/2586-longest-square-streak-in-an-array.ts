function longestSquareStreak(nums: number[]): number {
    const numSet = new Set(nums);
    let maxStreak = -1;

    for (const num of nums) {
        if (!isStartOfStreak(num, numSet)) continue;
        
        let currentStreak = 1;
        let current = num;
        
        while (numSet.has(current * current)) {
            current = current * current;
            currentStreak++;
            
            if (current > 1e5) break;
        }
        
        if (currentStreak >= 2) {
            maxStreak = Math.max(maxStreak, currentStreak);
        }
    }
    
    return maxStreak;
}

function isStartOfStreak(num: number, numSet: Set<number>): boolean {
    const sqrt = Math.sqrt(num);
    return !Number.isInteger(sqrt) || !numSet.has(sqrt);
}

