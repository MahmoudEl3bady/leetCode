/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    
    const res = nums.map(n=> n.toString().split('').reduce((a,b)=>Number(a)+Number(b),0));
    return Math.min(...res);
};