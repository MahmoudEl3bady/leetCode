function dailyTemperatures(temps: number[]): number[] {
    let res:number[] = Array(temps.length).fill(0);
    let stack:number []= [];

    for(let i = 0;i<temps.length;i++){
        while(stack && temps[stack.at(-1)] < temps[i]){
            res[stack.at(-1)] = i - stack.pop(); 
        }
        stack.push(i);
    }
    return res;
};
