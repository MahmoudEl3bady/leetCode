function finalPrices(prices: number[]): number[] {
    let res: number[] = [];
    let j;
    for (let i = 0; i < prices.length; i++) {
        j = i + 1;
        if (prices[j] <= prices[i]) {
            res.push(prices[i] - prices[j]);
        } else {
            while (prices[j] > prices[i]) {
                j++;
            }
            if (prices[j] <= prices[i]) {
                res.push(prices[i] - prices[j]);
            }else{
                res.push(prices[i]);
            }
        }
    }
    return res;
};