/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 *
 * sorted Arr => []
 * fn =>isPrime()
 */
const kthSmallestPrimeFraction = function (arr, k) {
  let fractions = [];
  let ans = [];
  for(let i  =0;i<arr.length;i++){
    let j =arr.length-1;
    while(i<j){
      fractions.push((arr[i]/arr[j]));
      ans.push([arr[i],arr[j]]);
      j--;
    }
  }
  const result = fractions.sort((a,b)=>a-b)[k-1];
  for(const [i,j] of ans ){
    if(i/j === result){
      return [i,j];
    }
  }
};
