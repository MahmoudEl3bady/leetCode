function longestSubarray(nums: number[]): number {
    let target = Math.max(...nums);
    let len = 0;
    let res = 0;
    for(const num of nums){
        if(num===target){
            len++;
        }else{
            len=0;
        }
        res = Math.max(res,len);
    }
    return res;
};