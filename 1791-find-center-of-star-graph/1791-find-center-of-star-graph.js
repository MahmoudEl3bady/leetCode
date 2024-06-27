/**
 * @param {number[][]} edges
 * @return {number}
 */
const findCenter = (edges) => {
  let graph = edges.flat();
  let map = new Map();
  for (const i of graph) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
  }
  let center = 0;

  for (const [key, value] of map) {
    if (value > center) {
      center = key;
    }
  }
  return center;
};