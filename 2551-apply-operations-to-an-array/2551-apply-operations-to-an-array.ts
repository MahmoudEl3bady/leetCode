function applyOperations(nums: number[]): number[] {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }
    let res: number[] = [];
    for (const num of nums) {
        if (num != 0) {
            res.push(num);
        }
    }

    for(let i = res.length;i<nums.length;i++){
        res.push(0);
    }
    console.log(res)
    return res;
};