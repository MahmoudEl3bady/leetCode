function countFairPairs(nums: number[], lower: number, upper: number): number {
    let fairPairs = 0;
    nums.sort((a,b)=>a-b);
   return lowerBound(nums,upper+1) - lowerBound(nums,lower);
};

function lowerBound  (nums:number[],val){
    let l =0 , r = nums.length - 1;
    let res = 0;
    while(l < r){
        let sum = nums[l] + nums[r];
        if(sum<val){
            res+= r - l;
            l++;
        }else{
            r--;
        }
    } 
    return res;
} 