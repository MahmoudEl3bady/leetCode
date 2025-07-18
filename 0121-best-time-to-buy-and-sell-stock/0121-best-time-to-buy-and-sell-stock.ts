function maxProfit(prices: number[]): number {
      let profit = 0;
        let buyPrice = prices[0];

        for(let i = 1;i<prices.length;i++){
          if(buyPrice > prices[i]){
                buyPrice = prices[i];
          }

          profit = Math.max(profit,prices[i] - buyPrice);
        }

        return profit; 
};