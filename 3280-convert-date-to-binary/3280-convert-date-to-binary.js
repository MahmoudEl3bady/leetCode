/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
        let dateSegments  = date.split("-");
    dateSegments = dateSegments.map((d)=>parseInt(d).toString(2));
    return dateSegments.join("-");
};