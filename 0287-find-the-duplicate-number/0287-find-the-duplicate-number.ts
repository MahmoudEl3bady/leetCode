function findDuplicate(nums: number[]): number {
    let dup = new Map();
    for(const num of nums){
        dup.set(num,dup.get(num)+1||1);
    }
   const arr =  Array.from(dup);
    arr.sort((a,b)=>b[1]-a[1]);
    console.log(arr);
    return arr[0][0];
};