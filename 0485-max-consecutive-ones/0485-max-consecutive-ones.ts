function findMaxConsecutiveOnes(nums: number[]): number {
    let maxCon = 0;
    let l = 0, r = 1;
    if (!nums.length) {
        return 0;
    }
    while (l <= r && r <= nums.length) {
        if (nums[l] === 1) {

            if (nums[l] === nums[r]) {
                r++;
            } else {
                maxCon = Math.max(maxCon, r - l);
                l = r;
                r++;
            }
        }else{
            l++;
            r++;
        }
    }
    return maxCon;
};