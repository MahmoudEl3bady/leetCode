function trailingZeroes(n: number): number {
    if(n===0) return 0;
    else{
        const div = Math.floor(n/5);
        return div + trailingZeroes(div); 
    }
}