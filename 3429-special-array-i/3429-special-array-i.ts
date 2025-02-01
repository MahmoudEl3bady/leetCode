function isArraySpecial(nums: number[]): boolean {
    if(nums.length==1) return true;
    for(let i = 0;i<nums.length -1 ;i++){
        if(haveSameParity(nums[i],nums[i+1])){
            return false;
        }
    }
    return true;
};

const haveSameParity = (n1, n2) => {
    if((n1%2==0 && n2%2==0) || (n1%2!==0 && n2%2!==0)) return true;
    return false;
};