function minOperations(nums: number[], k: number): number {
    let op = 0;
    nums.sort((a,b)=>a-b);
    for(const num of nums){
        if(num<k){
            op++;
        }
    }
    return op;
}; 