function findPermutationDifference(s: string, t: string): number {
    let perDiff: number = 0;

    for(let i = 0;i<s.length;i++){
        perDiff += (Math.abs(i-t.indexOf(s[i])));
    } 
    return perDiff;
};