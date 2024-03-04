/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
const isEmpty = function(obj) {
    if(Object.keys(obj).length === 0 )return true;
    else return false;
};