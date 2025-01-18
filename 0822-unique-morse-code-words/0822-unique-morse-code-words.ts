function uniqueMorseRepresentations(words: string[]): number {
    let set = new Set<string>();
    for (const word of words) {
        set.add(transformWord(word));
    }

    return set.size;

};

const transformWord = (word) => {
    let codes = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

    let chars = 'abcdefghijklmnopqrstuvwxyz';
    let res: string = '';
    for (const char of word) {
        res += codes[chars.indexOf(char)];
    }
    return res;
}