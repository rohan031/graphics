import { useState } from "react";

function BLine() {
	const [initialPoint, setInitialPoint] = useState({
		x: "",
		y: "",
	});

	const [finalPoint, setFinalPoint] = useState({
		x: "",
		y: "",
	});

	const [d, setd] = useState({
		dx: "",
		dy: "",
	});

	const [nd, setNd] = useState({
		dx: "",
		dy: "",
	});

	const [sign, setSign] = useState({
		s1: "",
		s2: "",
	});

	const [ie, setie] = useState({
		interchange: "",
		error: "",
	});

	const [final, setFinal] = useState({
		i: "",
		point: "",
		error: "",
		x: "",
		y: "",
	});

	const [table, setTable] = useState([]);

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

		let x = x1;
		let y = y1;
		console.log("x: ", x);
		console.log("y: ", y);

		let dx = Math.abs(x1 - x2);
		let dy = Math.abs(y1 - y2);
		console.log("dx: ", dx);
		console.log("dy: ", dy);

		setd({
			dx,
			dy,
		});

		let sign = x2 - x1;
		let s1 = sign > 0 ? 1 : sign < 0 ? -1 : 0;

		sign = y2 - y1;
		let s2 = sign > 0 ? 1 : sign < 0 ? -1 : 0;
		console.log("s1: ", s1);
		console.log("s2: ", s2);

		setSign({
			s1,
			s2,
		});

		let interchange, error;

		if (dy > dx) {
			let temp = dx;
			dx = dy;
			dy = temp;

			interchange = +1;
		} else {
			interchange = +0;
		}
		console.log("dx: ", dx);
		console.log("dy: ", dy);

		setNd({
			dx,
			dy,
		});

		error = +(2 * dy - dx);
		console.log("interchange: ", interchange);
		console.log("error: ", error);

		setie({
			interchange,
			error,
		});

		let loopValue = {};
		let tempTable = [];
		let finalLoop = {};

		for (let i = 1; i <= dx; i++) {
			console.log("loop ", i);

			console.log("point: ", parseInt(x, 10), " ", parseInt(y, 10));
			let point = `(${parseInt(x, 10)}, ${parseInt(y, 10)})`;

			loopValue = {
				i,
				point,
				error,
				x,
				y,
			};

			tempTable.push(loopValue);

			while (error > 0) {
				if (interchange === 1) {
					x += s1;
				} else {
					y += s2;
				}

				error = error - 2 * dx;
			}

			if (interchange === 1) {
				y = y + s2;
			} else {
				x = x + s1;
			}

			error = error + 2 * dy;

			finalLoop = {
				i,
				point,
				error,
				x,
				y,
			};
		}

		setTable(tempTable);
		setFinal(finalLoop);
	};

	return (
		<div className="line">
			<h2>Bresenham's Line Algorithm</h2>
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

			<div className="bline-answer">
				<h3>Solution</h3>

				<div className="bline-answer-initial">
					<h3>Initial Values:</h3>

					<p>x1: {initialPoint.x}</p>
					<p>y1: {initialPoint.y}</p>

					<p>x2: {finalPoint.y}</p>
					<p>y2: {finalPoint.y}</p>

					<p>
						△x {"(abs(x2-x1))"}: {d.dx}
					</p>
					<p>
						△y {"(abs(y2-y1))"}: {d.dy}
					</p>

					<p>s1: {sign.s1}</p>
					<p>s2: {sign.s2}</p>

					<p>
						{
							"if dy > dx swapt dy and dx and interchange = 1, otherwise interchange = 0"
						}{" "}
					</p>

					<p>
						△x {"(after condition check)"}: {nd.dx}
					</p>
					<p>
						△y {"(after condition check)"}: {nd.dy}
					</p>

					<p>interchange: {ie.interchange}</p>
					<p>
						error {"(2dy-dx)"}: {ie.error}
					</p>
				</div>

				<div className="bline-answer-loop">
					<h3>Table format:</h3>

					<div className="format">
						<p>i</p>
						<p>setPixel</p>
						<p>error</p>
						<p>x</p>
						<p>y</p>
					</div>

					{table.map((row, index) => {
						return (
							<div key={index} className="answer">
								<p>{row.i}</p>
								<p>{row.point}</p>
								<p>{row.error}</p>
								<p>{row.x}</p>
								<p>{row.y}</p>
							</div>
						);
					})}

					<div className="answer">
						<p>_ _</p>
						<p>_ _</p>
						<p>{final.error}</p>
						<p>{final.x}</p>
						<p>{final.y}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BLine;
