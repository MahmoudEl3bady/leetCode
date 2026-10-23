function carFleet(target: number, position: number[], speed: number[]): number {
    let carsDet: number[][] = [];
    for (let i = 0; i < position.length; i++) {
        carsDet.push([position[i], speed[i]]);
    }

    carsDet.sort((a, b) => b[0] - a[0]);

    let stack: number[] = [];
    for (const [p, s] of carsDet) {
        stack.push((target - p) / s)
        if (stack.length >= 2 && stack.at(-1) <= stack.at(-2)) {
            stack.pop()
        }
    }
    return stack.length
}