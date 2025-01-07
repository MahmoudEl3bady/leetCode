function stringMatching(words: string[]): string[] {
    console.log(words);
    let result = new Set<string>();
    for (let i = 0; i < words.length; i++) {
        let j = 0;
        const word = words[i];
        while (j < words.length) {
            if (words[j].length < word.length && words[j]!==word && word.includes(words[j])) {
                result.add(words[j]);
            }
            j++;
        }
    }
    return Array.from(result) as string[];
};