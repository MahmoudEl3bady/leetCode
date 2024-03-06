/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
const chunk = function(array, size) {
    let arr = [...array];
    let res = [];
    let s = size;
    for(let i = 0;i<array.length;i+=size){
        let chunk = arr.slice(i,s);
        // arr = arr.slice(size+1);
        s+=size;
        res.push(chunk);
    }
    return res;
};
