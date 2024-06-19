function findDifference(nums1: number[], nums2: number[]): number[][] {
let dist1: Set<number> = new Set<number>(); 
let dist2: Set<number> = new Set<number>(); 
    for(let num of nums1){
        if(!nums2.includes(num)){
            dist1.add(num);
        }
    }
    for(let num of nums2){
        if(!nums1.includes(num)){
            dist2.add(num);
        }
    }
    
    return [Array.from(dist1),Array.from(dist2)];
};