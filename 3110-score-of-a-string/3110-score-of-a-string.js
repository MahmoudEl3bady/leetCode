/**
 * @param {string} s
 * @return {number}
 */
const scoreOfString = function(s) {
    let score = 0;
    for(let left = 0 ,  right=left+1 ;right<s.length;left++,right++){
        score+=Math.abs(s[left].charCodeAt() - s[right].charCodeAt());
    }
    return score;
};