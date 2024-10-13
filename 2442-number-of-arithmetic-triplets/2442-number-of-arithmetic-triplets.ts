function arithmeticTriplets(nums: number[], diff: number): number {
    if(nums.length<3) return 0;
    let trips = 0 ;
    for(let i = 0;i<nums.length;i++){
        for(let j =i+1;j<nums.length;j++){
            for(let k = i+2;k<nums.length;k++){
                if(nums[j] -  nums[i]===diff && nums[k] - nums[j] ===diff){
                    trips++;
                }
            }
        }
    }
    return trips;
};