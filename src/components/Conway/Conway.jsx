import { useEffect, useState } from 'react';

import Cell from '../Cell/Cell';
import { calculateGameOfLife, randomice } from '../../utils/conway';

export default function Conway({
  schema,
  runningMode = null,

  contentType,
  cellSize, cellColor, cellXRotation, cellYRotation,
}) {
  const [grid, setGrid] = useState(schema);
  const runGameOfLife = () => {
    const interval = setInterval(() => {
      setGrid((prevState) => calculateGameOfLife(prevState));
    }, 10000);
    return () => clearInterval(interval);
  };
  const runRandom = () => {
    const interval = setInterval(() => {
      setGrid((prevState) => randomice(prevState));
    }, 1000);
    return () => clearInterval(interval);
  };
  useEffect(() => {
    if (runningMode === 'conway') {
      runGameOfLife();
    }
    if (runningMode === 'iterate') {
      runRandom();
    }
  }, []);

  const gridStyle = {
    width: `${schema[0].length * cellSize * 1.25}vw`,
    height: `${schema.length * cellSize * 1.25}vw`,
    display: 'grid',
    gridTemplateColumns: `repeat(${schema[0].length}, 1fr)`,
    gridTemplateRows: `'repeat(${schema.length}, 1fr)'`,

  };
  return (
    <div style={gridStyle}>
      {grid && grid.map((rows, i) => rows.map((_cols, k) => (
        <Cell
          state={grid[i][k]}
          cellHeight={cellSize}
          cellWidth={cellSize}
          content={grid[i][k]}
          color={cellColor}
          xRotation={cellXRotation}
          yRotation={cellYRotation}
          contentType={contentType}
        />
      )))}
    </div>
  );
}
