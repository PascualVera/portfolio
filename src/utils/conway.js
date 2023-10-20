const positions = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

const calculateGameOfLife = (schema) => {
  const cols = schema[0].length;
  const rows = schema.length;
  const next = schema.map((row, i) => row.map((_cell, j) => {
    let sum = 0;
    positions.forEach((position) => {
      const x = i + position[0];
      const y = j + position[1];
      if (x >= 0 && x < rows && y >= 0 && y < cols) {
        sum += schema[x][y];
      }
    });
    if (sum < 2 || sum > 3) {
      return 0;
    }
    if (sum === 3) {
      return 1;
    }
    return schema[i][j];
  }));
  return next;
};

export default calculateGameOfLife;
