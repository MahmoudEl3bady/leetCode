function summaryRanges(nums: number[]): string[] {
    let l = 0, r = 1;
    const ranges: string[] = [];
    while (r <= nums.length) {
        if (nums[r] - nums[r - 1] === 1) r++;
        else {
            const range = nums[l]==nums[r-1] ? `${nums[l]}` :`${nums[l]}->${nums[r - 1]}`; 
            ranges.push(range);
            l = r;
            r++;
        }
    }
    return ranges;
};