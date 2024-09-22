/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let lessThan = nums.filter((n)=>n<pivot);     
    let greaterThan = nums.filter((n)=>n>pivot);   
    let equal = nums.filter((n)=>n==pivot);
    return [...lessThan,...equal,...greaterThan];
};