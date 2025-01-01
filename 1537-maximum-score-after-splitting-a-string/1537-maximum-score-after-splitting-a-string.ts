function maxScore(s: string): number {
    let scores: number[] = [];
    let i = 0, j = 1;
    while (j < s.length) {
        const left = s.substring(i, j);
        const right = s.substring(j);
        scores.push(calcScore(left, right));
        j++;
    }
    return Math.max(...scores);
};
const calcScore = (left: string | string[], right: string | string[]): number => {
    left = Array.from(left);
    right = Array.from(right);
    const zeroCount = left.filter((a) => a === '0').length;
    const oneCount = right.filter((a) => a === '1').length;
    return zeroCount + oneCount;
}

