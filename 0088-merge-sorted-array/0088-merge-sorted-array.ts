/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
   for(let i =m,j=0 ;i<m+n && j<n;i++,j++){
        nums1[i] = nums2[j];
   } 
   nums1.sort((a,b)=>a-b);
};