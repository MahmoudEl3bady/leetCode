/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
        let result = numBottles;
    while (numBottles >= numExchange) {
        result += parseInt(numBottles / numExchange);
        numBottles = numBottles % numExchange + parseInt(numBottles / numExchange);
    }
    return result;
};