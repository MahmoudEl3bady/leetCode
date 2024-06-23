/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
      let obj = {};
    
    for(let i = 0;i<arr.length;i++){
        if(arr[i] in obj){
            obj[arr[i]] +=1; 
        }else {
            obj[arr[i]] =1; 
        }
    }
    let result= [];
    for(let i in obj){
        // console.log(obj[i])
        result.push(obj[i]);
    }

    return result.length == Array.from(new Set(result)).length;
};