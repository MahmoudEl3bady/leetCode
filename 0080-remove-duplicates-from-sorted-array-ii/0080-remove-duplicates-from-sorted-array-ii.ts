function removeDuplicates(nums: number[]): number {
    let current = 1;
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        count = (nums[i] === nums[i - 1]) ? count + 1 : 1;

        if (count <= 2) {
            nums[current++] = nums[i];
        }
    }

    return current;
}
