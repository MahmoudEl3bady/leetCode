/**
 * @param {number[]} nums
 * @return {number[]}
 */
const rearrangeArray = function(nums) {
    let posNums = nums.filter((a)=>a>0);
    console.log(posNums);
    let negNums =nums.filter((a)=>a<0);
    console.log(negNums);

    let result = [];
    for(let i=0;i<Math.max(negNums.length,posNums.length);i++){
        result.push(posNums[i]);
        result.push(negNums[i]);
    } 

    return result;
};