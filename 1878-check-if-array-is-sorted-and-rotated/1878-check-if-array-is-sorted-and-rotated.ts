function check(nums: number[]): boolean {
    let n = nums.length;
    const sortedNums = [...nums].sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        let isMatch = true;
        for (let j = 0; j < n; j++) {
            if (nums[(i + j) % n] != sortedNums[j]){
             isMatch = false;
            break;    
            }
        }
        if (isMatch)
            return true;
    }

    return false;
};