function divideArray(nums: number[]): boolean {
    let n = nums.length /2;
    let subSize = nums.length / n; 
    let map = new Map();
    for(const num of nums){
        map.set(num,map.get(num)+1 || 1);
    }
    const arr = Array.from(map.entries());
    let count = 0;
    for(const [k,v] of arr){
        if(v%2==0){
           count = count+(v/subSize); 
        }
    }
    return count ==n;
};