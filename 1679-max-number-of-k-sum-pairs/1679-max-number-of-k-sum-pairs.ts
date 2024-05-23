function maxOperations(nums: number[], k: number): number {
      nums = nums.sort((a,b)=>a-b);
  let operations = 0;
  let left = 0 , right = nums.length -1;
  while(left<right){
    if(nums[left]+nums[right] > k) right--;
    else if (nums[left]+nums[right] < k)left++;
    else{
      operations+=1;
      right--;
      left++;
    } 
  }
    return operations;
};