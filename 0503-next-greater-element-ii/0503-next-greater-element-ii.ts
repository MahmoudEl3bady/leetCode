function nextGreaterElements(nums: number[]): number[] {
    let stack: number[] = [];
    let res: number[] = Array(nums.length);

    for (let i = 2 * nums.length - 1; i >= 0; i--) {
        while (stack.length > 0 && nums[stack.at(-1)] <= nums[i % nums.length]) {
            stack.pop();
        }
        res[i % nums.length] = stack.length == 0 ? -1 : nums[stack.at(-1)];
        stack.push(i % nums.length);
    }
    return res;
};