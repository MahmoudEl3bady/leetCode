/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function(accounts) {
    let totals = [];
    
    for (const acc of accounts ){
        totals.push(acc.reduce((a,b)=>a+b));
    }
    
    return Math.max(...totals);
};