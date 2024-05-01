function reversePrefix(word: string, ch: string): string {
    let revWord =word.substring(0,word.indexOf(ch)+1);
    return revWord.split('').reverse().join("") + word.substring(word.indexOf(ch)+1); 
};