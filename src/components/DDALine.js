import { useState } from "react";

function DDALine() {
	const [initialPoint, setInitialPoint] = useState({
		x: "",
		y: "",
	});

	const [finalPoint, setFinalPoint] = useState({
		x: "",
		y: "",
	});

	const [len, setLen] = useState({
		lx: "",
		ly: "",
		l: "",
	});

	const [increment, setIncrement] = useState({
		x: "",
		y: "",
	});

	const [xy, setxy] = useState({
		x: "",
		y: "",
	});

	const [table, setTable] = useState([]);

	const [final, setFinal] = useState({
		i: "",
		point: "",
		x: "",
		y: "",
	});

	const handleInitial = (e) => {
		const name = e.target.name;

		setInitialPoint((prev) => {
			return {
				...prev,
				[name]: +e.target.value,
			};
		});
	};

	const handleFinal = (e) => {
		const name = e.target.name;

		setFinalPoint((prev) => {
			return {
				...prev,
				[name]: +e.target.value,
			};
		});
	};

	const handleAlgo = () => {
		let x1 = +initialPoint.x;
		let y1 = +initialPoint.y;

		let x2 = +finalPoint.x;
		let y2 = +finalPoint.y;

		let lx = Math.abs(x2 - x1);
		let ly = Math.abs(y2 - y1);

		let length = lx > ly ? lx : ly;
		console.log("length:", length);

		setLen({
			lx,
			ly,
			l: length,
		});

		let xi = (x2 - x1) / length;
		let yi = (y2 - y1) / length;
		console.log("xi: ", xi);
		console.log("yi: ", yi);

		setIncrement({
			x: xi,
			y: yi,
		});

		let x = x1 + 0.5;
		let y = y1 + 0.5;
		console.log("x: ", x);
		console.log("y: ", y);

		setxy({
			x,
			y,
		});

		let loopValue = {};
		let tempTable = [];
		let finalLoop = {};

		for (let i = 1; i <= length; i++) {
			console.log("loop ", i);

			console.log("points: ", parseInt(x, 10), ", ", parseInt(y, 10));
			let point = `(${parseInt(x, 10)}, ${parseInt(y, 10)})`;

			loopValue = {
				i,
				point,
				x,
				y,
			};

			tempTable.push(loopValue);

			x += xi;
			y += yi;

			finalLoop = {
				i,
				point,
				x,
				y,
			};
		}

		// console.log(tempTable);
		setTable(tempTable);
		setFinal(finalLoop);
	};

	// console.log(table);

	return (
		<div className="line">
			<h2>DDA Algorithm</h2>
			<div className="line-inputs">
				<div className="line-inputs-item">
					<h3>Initial points</h3>
					<div>
						<p>x1: </p>
						<input
							type="number"
							value={initialPoint.x}
							name="x"
							onChange={handleInitial}
							placeholder="X1"
						/>
					</div>

					<div>
						<p>y1: </p>
						<input
							type="number"
							value={initialPoint.y}
							name="y"
							onChange={handleInitial}
							placeholder="y1"
						/>
					</div>
				</div>

				<div className="line-inputs-item">
					<h3>Final points</h3>

					<div>
						<p>y1:</p>
						<input
							type="number"
							value={finalPoint.x}
							name="x"
							onChange={handleFinal}
							placeholder="y2"
						/>
					</div>

					<div>
						<p>y2:</p>
						<input
							type="number"
							value={finalPoint.y}
							name="y"
							onChange={handleFinal}
							placeholder="y2"
						/>
					</div>
				</div>

				<button onClick={handleAlgo}>Calculate</button>
			</div>

			<div className="dda-answer">
				<h3>Solution</h3>
				<div className="dda-answer-initial">
					<h3>Initial Values:</h3>

					<p>x1: {initialPoint.x}</p>
					<p>y1: {initialPoint.y}</p>

					<p>x2: {finalPoint.y}</p>
					<p>y2: {finalPoint.y}</p>

					<p>lx: {len.lx}</p>
					<p>ly: {len.ly}</p>
					<p>
						length {"(greater of lx and ly)"}: {len.l}
					</p>

					<p>
						x increment{" ((x2-x1)/length)"}: {increment.x}
					</p>
					<p>
						y increment{" ((y2-y1)/length)"}: {increment.y}
					</p>

					<p>
						x{" (x1 + 0.5)"}: {xy.x}
					</p>
					<p>
						y{" (y1 + 0.5)"}: {xy.y}
					</p>
				</div>

				<div className="dda-answer-loop">
					<h3>Table format:</h3>
					<div className="format">
						<p>i</p>
						<p>setPixel</p>
						<p>x</p>
						<p>y</p>
					</div>

					{table.map((row, index) => {
						return (
							<div key={index} className="answer">
								<p>{row.i}</p>
								<p>{row.point}</p>
								<p>{row.x}</p>
								<p>{row.y}</p>
							</div>
						);
					})}

					<div className="answer">
						<p>_ _</p>
						<p>_ _</p>
						<p>{final.x}</p>
						<p>{final.y}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DDALine;
