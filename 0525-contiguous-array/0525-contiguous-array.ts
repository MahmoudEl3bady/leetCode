function findMaxLength(nums: number[]): number {
    let map = new Map<number,number>();

    map.set(0,-1);
    let maxLen = 0,count = 0;
    for(let i = 0;i<nums.length;i++){
        count = count + (nums[i]==1?1:-1);
        if(map.has(count)){
            maxLen = Math.max(maxLen,i-map.get(count));
        }else{
            map.set(count,i);
        }
    }
    return maxLen;
};