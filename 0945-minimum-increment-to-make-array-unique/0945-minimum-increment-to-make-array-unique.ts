function minIncrementForUnique(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let counts = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      counts += nums[i - 1] - nums[i] + 1;
      nums[i] = nums[i - 1] + 1;
    }
  }
  return counts;
};