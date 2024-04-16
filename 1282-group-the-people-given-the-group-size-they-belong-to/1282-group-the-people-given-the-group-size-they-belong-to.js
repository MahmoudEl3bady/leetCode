/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
const groupThePeople = function(groupSizes) {
   const groups = {};
    const result = [];
    
    // Iterate over groupSizes
    for (let i = 0; i < groupSizes.length; i++) {
        const size = groupSizes[i];
        
        // Initialize group array if not exist
        if (!groups[size]) {
            groups[size] = [];
        }
        
        groups[size].push(i);
        
        // If group is full, add to result and reset group
        if (groups[size].length === size) {
            result.push(groups[size]);
            groups[size] = [];
        }
    }
    
    return result;
};