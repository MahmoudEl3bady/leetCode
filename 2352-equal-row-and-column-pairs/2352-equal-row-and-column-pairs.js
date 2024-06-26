/**
 * @param {number[][]} grid
 * @return {number}
 */


const equalPairs = (grid) => {
  let cols = [];
  for (let i = 0; i < grid.length; i++) {
    let col = [];
    for (let j = 0; j < grid.length; j++) {
      col.push(grid[j][i]);
    }
    cols.push(col);
  }
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (areArraysEqual(grid[i], cols[j])) {
        count++;
      }
    }
  }

  return count;
};

const areArraysEqual = (array1, array2) => {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }

  return true;
}
    