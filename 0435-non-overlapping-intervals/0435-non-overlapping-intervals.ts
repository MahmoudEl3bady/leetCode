function eraseOverlapIntervals(intervals: number[][]): number {
    if (intervals.length <= 1) return 0;
    
    // Sort by end time (greedy approach)
    intervals.sort((a, b) => a[1] - b[1]);
    
    let count = 0;
    let lastEnd = intervals[0][1];
    
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < lastEnd) {
            count++;
        } else {
            lastEnd = intervals[i][1];
        }
    }
    
    return count;
}

/**
    [[1,2],[2,3],[1,3],[3,4]]
    count = 0
    lastEnd = 2

    loop:

 */