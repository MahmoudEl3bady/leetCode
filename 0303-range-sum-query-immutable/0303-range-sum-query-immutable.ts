class NumArray {
    nums: number[]
    prefix:number[]
    constructor(nums: number[]) {
        this.nums = nums;
        this.prefix = [this.nums[0]];
        for (let i = 1; i < this.nums.length; i++) {
            this.prefix[i] = this.prefix[i - 1] + this.nums[i];
        }
    }
    calcPrefix(){

    }

    sumRange(l: number, r: number): number {
        return (this.prefix[r] - (l > 0 ? this.prefix[l - 1] : 0));
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
    [-2,-2,1,-4,-2,-3]
 */