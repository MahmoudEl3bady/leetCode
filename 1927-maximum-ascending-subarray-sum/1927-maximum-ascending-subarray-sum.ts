function maxAscendingSum(nums: number[]): number {
    if(!nums || nums.length==1) return nums[0];
    let subs: number[][] = [];
    for (let i = 0; i < nums.length - 1; i++) {
        let sub: number[] = [nums[i]];
        let subSum = nums[i];
        for (let j = i; j < nums.length -1 ; j++) {
            if (nums[j + 1] > nums[j]) {
                subSum += nums[j + 1];
                sub.push(nums[j + 1]);
            }else{
                break;
            }
        }
        sub.push(subSum);
        subs.push(sub);
    }
    console.log(subs);
    subs.sort((a, b) => b.at(-1) - a.at(-1));
    console.log(subs);
    return subs[0][subs[0].length-1];
};