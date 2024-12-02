/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sen, sWord) {
    sen = sen.split(" ");
    for (let i = 0; i < sen.length; i++) {
        const word = sen[i];
        let j = 0, m = 0;
        if (word < sWord) {
            continue;
        } else {
            while (j < word.length && m < sWord.length) {
                if (word[j] != sWord[m]) {
                    break;
                } else {
                    m++;
                    j++;
                }
            }
            if (m == sWord.length) {
                return i + 1;
            }
        }
    }

    return -1;
};