function timeRequiredToBuy(tickets: number[], k: number): number {
    let time = 0;
    let q = tickets.map((el, index) => [index, el]);
    while (q.length>0) {
        const [index, ticketsRem] = q.shift();
        time++;
        const newRem = ticketsRem - 1;
        if (index === k && newRem === 0) {
            return time;
        } 
        
        if(newRem!==0){
            q.push([index, newRem]);
        }
    }
    return time;
};