function largestNumber(nums: number[] | string[]): string {
    nums = nums.map(num=>num.toString());
    nums.sort((a,b)=>(b+a) - (a+b));
    if(nums[0] =="0") return "0";
    return nums.join("");
};