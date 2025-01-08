function countPrefixSuffixPairs(words: string[]): number {
    const isPrefixAndSuffix = (s1, s2) => {
        if (s2.startsWith(s1) && s2.endsWith(s1)) {
            return true;
        }
        return false;
    }
    let count: number = 0;
    for (let i = 0; i < words.length; i++) {
        let j = i+1;
        const word = words[i];
        while (j < words.length) {
            if (isPrefixAndSuffix(word, words[j])) {
                count++;
            }
            j++;
        }
    }
    return count;
};