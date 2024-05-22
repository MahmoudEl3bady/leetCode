function findMaxAverage(nums: number[], k: number): number {
  let maxAvg = -Infinity;
  let sum = 0;
  let j = 0;
  for(let i = 0;i<nums.length;i++){
    sum+=nums[i];
    if(i-j+1===k){
      maxAvg = Math.max(maxAvg,sum / k);
      sum-=nums[j];
      j++;
    }
  }
return maxAvg;
}
