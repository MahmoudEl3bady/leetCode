function pivotIndex(nums: number[]): number {
  let cumSum = [0];
  for(let i = 0;i<nums.length;i++){
    cumSum.push(cumSum[i]+nums[i]);
  }
  console.log(cumSum)
  for(let i =0;i<nums.length;i++){
    if(cumSum[cumSum.length-1] - cumSum[i] ===cumSum[i-1]){
      return i-1;
    }
  }
  if(nums.slice(0,nums.length).reduce((a,b)=>a+b)===nums[nums.length-1]){
    return nums.length-1;
 }
  return -1;
};