/**
 * @param {number} n
 * @return {number}
 */
const  tribonacci = function(n) {
    const numbers =[0,1,1];
    for(let i = 0;i<38;i++){
        numbers.push(numbers[i]+numbers[i+1]+numbers[i+2]);
    } 
    return numbers[n];
};