function lengthOfLongestSubstring(s: string): number {
    if (s.length === 0) return 0;
    let maxLength = 0;
    let set = new Set();
    let j = 0;
    for (let i = 0; i < s.length;) {
        if (!set.has(s[i])) {
            set.add(s[i++]);
            maxLength = Math.max(maxLength, set.size);
        } else {
            set.delete(s[j++]);
        }

    }
    return maxLength;
};