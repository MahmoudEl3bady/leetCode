/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = function(functions) {
    const reverseFuns = functions.reverse(); 
    return function(x) {
        
        for(const fun of reverseFuns){
            x=fun(x);
        }   
        return x;     
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */