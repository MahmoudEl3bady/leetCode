function waysToSplitArray(nums: number[]): number {
    let prefix: number[] = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i - 1] + nums[i];
    }
    let res: number = 0;

    let i = 0, j = prefix.length-1;
    while (i < j) {
        if (prefix[j] - prefix[i] <= prefix[i]) {
            res++;
        }
        i++;
    }
    return res;
};