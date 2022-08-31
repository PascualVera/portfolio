import { useEffect, useState } from "react";
import "./Conway.css";
export default function Conway() {
	//******************//
	const schema = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
		[0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
		[0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
		[0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
		[0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
		[0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //Middle
		[0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
		[0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
		[0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
		[0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
		[0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
		[0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	];
	const cols = schema[0].length;
	const rows = schema.length;

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
	//******************//
	const [grid, setGrid] = useState(schema);

	useEffect(() => {
		const interval = setInterval(() => {
			setGrid(g => {
				const next = g.map((row, i) => {
					return row.map((cell, j) => {
						let sum = 0;
						positions.forEach(position => {
							const x = i + position[0];
							const y = j + position[1];
							if (x >= 0 && x < rows && y >= 0 && y < cols) {
								sum += g[x][y];
							}
						});
						if (sum < 2 || sum > 3) {
							return 0;
						}
						if (sum === 3) {
							return 1;
						}
						return g[i][j];
					});
				});
				return next;
			});
		}, 4000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="conway">
			{grid &&
				grid.map((rows, i) =>
					rows.map((cols, k) => (
						<div className={grid[i][k] ? "dead" : "alive"} />
					))
				)}
		</div>
	);
}
