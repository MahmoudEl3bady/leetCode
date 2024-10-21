function maxUniqueSplit(s: string): number {
    function backtrack(start: number, seen: Set<string>): number {
        if (start === s.length) return seen.size;
        
        let maxSplit = 0;
        
        for (let end = start + 1; end <= s.length; end++) {
            const substring = s.substring(start, end);
            if (!seen.has(substring)) {
                seen.add(substring);
                maxSplit = Math.max(maxSplit, backtrack(end, seen));
                seen.delete(substring);
            }
        }
        
        return maxSplit;
    }
    
    return backtrack(0, new Set());
}
