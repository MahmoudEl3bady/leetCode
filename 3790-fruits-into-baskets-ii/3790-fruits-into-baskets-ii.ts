function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
    let placed = 0;
    let n = fruits.length;
    for (let i = 0; i < n; i++) {
        let fruit = fruits[i];
        for (let j = 0; j < n; j++) {
            if (fruit <= baskets[j]) {
                placed++;
                baskets.splice(j,1);
                break;
            }
        }
    }
    return n - placed;

};