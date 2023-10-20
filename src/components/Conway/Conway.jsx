import { useEffect, useState } from 'react';

import Cell from '../Cell/Cell';
import calculateGameOfLife from '../../utils/conway';

export default function Conway({ schema, isRunning }) {
  const [grid, setGrid] = useState(schema);
  const runGameOfLife = () => {
    const interval = setInterval(() => {
      setGrid((prevState) => calculateGameOfLife(prevState));
    }, 2000);
    return () => clearInterval(interval);
  };
  useEffect(() => {
    if (isRunning) {
      runGameOfLife();
    }
  }, []);

  const gridStyle = {
    width: 'inherit',
    height: 'inherit',
    display: 'grid',
    gridTemplateColumns: `repeat(${schema[0].length}, 1fr)`,
    gridTemplateRows: `'repeat(${schema.length}, 1fr)'`,
  };
  return (
    <div style={gridStyle}>
      {grid && grid.map((rows, i) => rows.map((_cols, k) => (
        <Cell state={grid[i][k]} />
      )))}
    </div>
  );
}
