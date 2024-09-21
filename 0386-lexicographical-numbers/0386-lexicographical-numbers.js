/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
  let nums = [];
  for(let i = 1;i<=n;i++){
    nums.push(i);
  }  
  return nums.sort();
};