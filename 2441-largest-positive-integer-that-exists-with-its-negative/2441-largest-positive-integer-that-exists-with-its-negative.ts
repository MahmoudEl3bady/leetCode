function findMaxK(nums: number[]): number {
let max =-1;
for(let i =0;i<nums.length;i++){
    max = Math.max(...nums);
    if(nums.includes(max*-1)){
        return max;
    }else{
        nums.splice(nums.indexOf(max),1);
        i=0;
        console.log(nums);
    }

}
return -1;
    
};