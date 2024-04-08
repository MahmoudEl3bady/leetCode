/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
const findWordsContaining = function(words, x) {
    
    let indexs = [];
    for(let i =0;i<words.length;i++){
        if(words[i].split('').includes(x)){
            indexs.push(i)            
        }
    }
    return indexs;
    
};