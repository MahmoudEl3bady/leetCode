function findPermutationDifference(s: string, t: string): number {
    let perDiff: number = 0;
    let map = new Map<string,number>();

    for(let i =0;i<t.length;i++){
        map.set(t[i],i);
    }
    for(let i =0;i<s.length;i++){
        perDiff += (Math.abs(i-map.get(s[i])));
    }
    return perDiff;
};