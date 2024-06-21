function largestAltitude(gain: number[]): number {
  let prefixSum = [0];
for (let i = 0; i < gain.length ; i++) {
  prefixSum.push(prefixSum[i] + gain[i]);
}
return Math.max(...prefixSum);
};