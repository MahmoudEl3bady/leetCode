/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
    const totalRolls = rolls.length + n;
    const expectedSum = totalRolls * mean;
    const currentSum = rolls.reduce((a, b) => a + b, 0);
    const missingSum = expectedSum - currentSum;
    if (missingSum < n || missingSum > 6 * n) {
        return [];
    }
    const res = Array(n).fill(1);
    let remainingSum = missingSum - n; 
    console.log(remainingSum)

    for (let i = 0; i < n && remainingSum > 0; i++) {
        const increment = Math.min(5, remainingSum); 
        res[i] += increment;
        remainingSum -= increment;
    }
    return res;
};
