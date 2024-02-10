/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = function(arr, fn) {
    let filteredArr = [];
    for(let i =0;i<arr.length;i++){
        filteredArr.push(fn(arr[i],i));
    }
    let res = [];
    for(let  i =0;i<arr.length;i++){
        if(filteredArr[i]){
            res.push(arr[i]);
        }
    }
    return res;
    
};