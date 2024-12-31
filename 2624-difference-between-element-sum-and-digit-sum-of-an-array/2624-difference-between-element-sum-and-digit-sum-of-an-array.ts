function differenceOfSum(nums: number[]): number {
    const elementSum = nums.reduce((a, b) => a + b);
    let digit: string[] | number[] = nums.join('').split('');
    digit = digit.map(i => parseInt(i));
    const digitSum: number = digit.reduce((a, b) => a + b);
    return Math.abs(elementSum - digitSum);
};