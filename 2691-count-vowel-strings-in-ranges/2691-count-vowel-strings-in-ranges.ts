function vowelStrings(words: string[], queries: number[][]): number[] {
    let ans: number[] = [];
    let vowels = new Set('aeiou');
    let n = words.length;
    const isVowel = (c) => {
        return vowels.has(c);
    }

    const prefix: number[] = [];
    prefix.push((isVowel(words[0][0]) && isVowel(words[0].at(-1)) ? 1 : 0));

    for (let i = 1; i < n; i++) {
        const word = words[i];
        prefix[i] = prefix[i - 1] + (isVowel(word[0]) && isVowel(word.at(-1)) ? 1 : 0);
    }

    for (const [start, end] of queries) {
        if (start == 0) {
            ans.push(prefix[end]);
        } else {
            ans.push(prefix[end] - prefix[start - 1]);
        }
    }

    return ans;
}
