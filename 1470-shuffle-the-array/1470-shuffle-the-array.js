/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let left = nums.slice(0,n);
    let right = nums.slice(n);
    let res = [];
    for(let i = 0;i<left.length;i++){
        res.push(left[i]);
        res.push(right[i]);
        
    }
    
    return res;
    
};