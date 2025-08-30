function isValidSudoku(board: string[][]): boolean {
    
  const isValid = (cells: string[]): boolean => {
    const seen = new Set<string>();
    for (const ch of cells) {
      if (ch === ".") continue;
      if (parseInt(ch) < 1 || parseInt(ch) > 9) return false;
      if (seen.has(ch)) return false;
      seen.add(ch);
    }
    return true;
  };

  for (let i = 0; i < 9; i++) {
    const row = board[i];
    const col = board.map(r => r[i]);
    if (!isValid(row) || !isValid(col)) return false;
  }

  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      const cells: string[] = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          cells.push(board[boxRow * 3 + i][boxCol * 3 + j]);
        }
      }
      if (!isValid(cells)) return false;
    }
  }

  return true;
}
