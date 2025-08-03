function minSubArrayLen(target: number, nums: number[]): number {
    let minLength = Infinity;
    let sub: number[] = [];
    let sum = 0;
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
            sub.push(nums[i]);
            sum += nums[i];
        while(sum >= target) {
            minLength = Math.min(sub.length, minLength);
            sum-= nums[j++]
            sub.shift();
        }
    }
    console.log(minLength)
    return  minLength!=Infinity ?minLength : 0;
};