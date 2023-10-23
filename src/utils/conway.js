function generateBinaryMatrix(rows, columns) {
  const matrix = [];

  for (let i = 0; i < rows; i += 1) {
    const row = [];

    for (let j = 0; j < columns; j += 1) {
      const randomValue = Math.random(); // Generates a random value between 0 and 1
      const binaryValue = Math.round(randomValue); // Rounds to the nearest integer (0 or 1)
      row.push(binaryValue);
    }

    matrix.push(row);
  }

  return matrix;
}

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

const iterateRun = (schema) => {
  // Create a deep copy of the input schema
  const tempSchema = schema.map((row) => [...row]);
  if (tempSchema[tempSchema.length - 1][tempSchema[tempSchema.length - 1].length - 1] === 0) {
    for (let i = 0; i < tempSchema.length; i += 1) {
      for (let j = 0; j < tempSchema[i].length; j += 1) {
        if (tempSchema[i][j] === 0) {
          tempSchema[i][j] = 1;
          return [...tempSchema];
        }
      }
    }
  }

  for (let i = 0; i < tempSchema.length; i += 1) {
    for (let j = 0; j < tempSchema[i].length; j += 1) {
      if (tempSchema[i][j] === 1) {
        tempSchema[i][j] = 0;
        return [...tempSchema];
      }
    }
  }
  return schema;
};
const randomice = (schema) => {
  const cols = schema[0].length;
  const rows = schema.length;
  return generateBinaryMatrix(rows, cols);
};

export { calculateGameOfLife, iterateRun, randomice };
