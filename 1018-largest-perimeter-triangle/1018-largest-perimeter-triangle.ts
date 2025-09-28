function largestPerimeter(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let perimeters: number[] = [];
    if(isTriangle(nums.at(-1),nums.at(-2),nums.at(-3))){
        return nums.at(-1)+nums.at(-2)+nums.at(-3);
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 2; j < nums.length; j++) {
            // console.log(nums[i], nums[i + 1], nums[j]);
            if (isTriangle(nums[i], nums[i + 1], nums[j])) {
                perimeters.push(nums[i] + nums[i + 1] + nums[j]);
            }
        }
    }
    if (perimeters.length > 0) {
        return perimeters.at(-1);
    } else {
        return 0;
    }
}

const isTriangle = (a, b, c) => {
    return a + b > c && a + c > b && c + b > a;
}
