/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function(nums) {
   const dup = {};
    const res = [];
    for(let i = 0;i<nums.length;i++){
        if(dup.hasOwnProperty(nums[i])){
            dup[`${nums[i]}`]+=1;
        }
        else {
            dup[`${nums[i]}`] = 1;
        }
    }
for(const num in dup){
    if(dup[num]==2){
        res.push(parseInt(num))
    }
}
    return res;
    
};