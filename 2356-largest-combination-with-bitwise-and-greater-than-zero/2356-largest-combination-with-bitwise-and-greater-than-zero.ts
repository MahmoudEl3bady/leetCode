function largestCombination(nums: number[]): number {
    let counts = new Array(32).fill(0);
    for(let  n of nums){
        let i = 0;
        while(n>0){
            counts[i] += 1 & n;
            i++;
            n = n >> 1;
        }
    }
    return Math.max(...counts);
};