/**
 * @param {string[]} operations
 * @return {number}
 */
const finalValueAfterOperations = function(operations) {
    let x =0;
    for(const op of operations)
        {
            switch(op){
                case "--X":
                    --x;
                    break;
                case "++X":
                    ++x;
                    break;
                case "X++":
                    x++;
                    break;
                case "X--":
                    x--;
                    break;
            }
            
        }
    return x;
};