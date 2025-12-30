function numMagicSquaresInside(grid: number[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;
    
    if (rows < 3 || cols < 3) return 0;
    
    let count = 0;
    
    for (let i = 0; i <= rows - 3; i++) {
        for (let j = 0; j <= cols - 3; j++) {
            if (isMagic(grid, i, j)) {
                count++;
            }
        }
    }
    
    return count;
}

function isMagic(grid: number[][], r: number, c: number): boolean {
    const seen = new Set<number>();
    const magicSum = 15;
    
   
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const num = grid[r + i][c + j];
            if (num < 1 || num > 9) return false;
            if (seen.has(num)) return false;
            seen.add(num);
        }
    }
    
    // Check rows
    for (let i = 0; i < 3; i++) {
        let sum = 0;
        for (let j = 0; j < 3; j++) {
            sum += grid[r + i][c + j];
        }
        if (sum !== magicSum) return false;
    }
    
    // Check columns
    for (let j = 0; j < 3; j++) {
        let sum = 0;
        for (let i = 0; i < 3; i++) {
            sum += grid[r + i][c + j];
        }
        if (sum !== magicSum) return false;
    }
    
    // Check main diagonal
    if (grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2] !== magicSum) {
        return false;
    }
    
    // Check anti-diagonal
    if (grid[r][c + 2] + grid[r + 1][c + 1] + grid[r + 2][c] !== magicSum) {
        return false;
    }
    
    return true;
}