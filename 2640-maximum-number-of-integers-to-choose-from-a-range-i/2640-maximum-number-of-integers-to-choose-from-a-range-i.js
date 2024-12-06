/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
const maxCount = function(banned, n, maxSum) {
    let set = new Set();
    let sum = 0;
    for(let i= 1;i<=n;i++){
        if(!banned.includes(i) && sum+i <= maxSum){
            set.add(i);
            sum+=i;
        }
    }
    return set.size;
};