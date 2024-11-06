function canSortArray(nums: number[]): boolean {
    // Helper function to count set bits in a number
    const countSetBits = (n: number) => {
        let count = 0;
        while (n > 0) {
            count += n & 1;
            n >>= 1;
        }
        return count;
    };

    let numsCopy = [...nums];

    let n = nums.length;
    let swapped = true;

    while (swapped) {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (countSetBits(nums[i]) === countSetBits(nums[i + 1]) && nums[i] > nums[i + 1]) {
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
                swapped = true;
            }
        }
    }
    for (let i = 1; i < n; i++) {
        if (nums[i] < nums[i - 1]) {
            return false;
        }
    }

    return true;
}
