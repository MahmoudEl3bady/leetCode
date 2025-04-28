function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    let result: number[] = [];
    for (let i = 0; i < nums1.length; i++) {
        const index = nums2.findIndex((a) => a == nums1[i]);
        if (index === nums2.length - 1) {
            result.push(-1)
            continue;
        }
        for (let j = index + 1; j < nums2.length; j++) {
            if (nums2[j] && nums2[j] > nums1[i]) {
                result.push(nums2[j]);
                break;
            }
            if (j == nums2.length - 1) result.push(-1);
        }
    }
    return result;
};