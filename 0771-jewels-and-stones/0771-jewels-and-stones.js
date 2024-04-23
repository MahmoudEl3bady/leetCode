/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function(jewels, stones) {
    let count = 0;
for(const  st of stones){
    if(jewels.includes(st)){
        count++;
    }
}
    return count;
};