import { useState } from "react";

function MidCircle() {
	const [userInputs, setUserInputs] = useState({
		h: "",
		r: "",
		k: "",
	});

	const [initial, setInitial] = useState({
		x: "",
		y: "",
		p: "",
	});

	const [table, setTable] = useState([]);

	const handleInput = (e) => {
		const name = e.target.name;

		setUserInputs((prev) => {
			return {
				...prev,
				[name]: +e.target.value,
			};
		});
	};

	const handleAlgo = () => {
		let h = userInputs.h;
		let k = userInputs.k;
		let r = userInputs.r;

		let x = 0;
		let y = r;
		let p = 1 - r;

		console.log("x: ", x);
		console.log("y: ", y);
		console.log("p: ", p);

		setInitial({
			x,
			y,
			p,
		});

		let i = 1;
		let loopValue = {};
		let tempTable = [];

		while (x <= y) {
			console.log("loop: ", i);

			let tempPoints = [];
			let point;

			console.log("point: ", x + h, ", ", y + k);
			point = `(${x + h}, ${y + k})`;
			tempPoints.push(point);

			console.log("point: ", -x + h, ", ", -y + k);
			point = `(${-x + h}, ${-y + k})`;
			tempPoints.push(point);

			console.log("point: ", y + h, ", ", x + k);
			point = `(${y + h}, ${x + k})`;
			tempPoints.push(point);

			console.log("point: ", -y + h, ", ", -x + k);
			point = `(${-y + h}, ${-x + k})`;
			tempPoints.push(point);

			console.log("point: ", -y + h, ", ", x + k);
			point = `(${-y + h}, ${x + k})`;
			tempPoints.push(point);

			console.log("point: ", y + h, ", ", -x + k);
			point = `(${y + h}, ${-x + k})`;
			tempPoints.push(point);

			console.log("point: ", -x + h, ", ", y + k);
			point = `(${-x + h}, ${y + k})`;
			tempPoints.push(point);

			console.log("point: ", x + h, ", ", -y + k);
			point = `(${x + h}, ${-y + k})`;
			tempPoints.push(point);

			loopValue = {
				i,
				p,
				x,
				y,
				points: tempPoints,
			};

			tempTable.push(loopValue);

			if (p < 0) {
				p = p + 2 * x + 3;
			} else {
				p = p + 2 * (x - y) + 5;
				y--;
			}
			x++;
			i++;
		}

		setTable(tempTable);
	};

	return (
		<div className="circle">
			<h2>Mid point circle Algorithm</h2>

			<div className="circle-inputs">
				<div>
					<p>h: </p>
					<input
						type="number"
						value={userInputs.h}
						name="h"
						onChange={handleInput}
						placeholder="h"
					/>
				</div>

				<div>
					<p>k: </p>
					<input
						type="number"
						value={userInputs.k}
						name="k"
						onChange={handleInput}
						placeholder="k"
					/>
				</div>

				<div>
					<p>r: </p>
					<input
						type="number"
						value={userInputs.r}
						name="r"
						onChange={handleInput}
						placeholder="r"
					/>
				</div>

				<button onClick={handleAlgo}>Calculate</button>
			</div>

			<div className="circle-answer">
				<h3>Solution</h3>

				<div className="circle-answer-initial">
					<h3>Initial Values:</h3>

					<p>h: {userInputs.h}</p>
					<p>k: {userInputs.k}</p>
					<p>r: {userInputs.r}</p>

					<p>
						x{" (x=0)"}: {initial.x}
					</p>
					<p>
						y{" (y=r)"}: {initial.y}
					</p>
					<p>
						p{" (1-r)"}: {initial.p}
					</p>
				</div>

				<div className="circle-answer-loop">
					<h3>Table Format:</h3>

					<div className="format">
						<p>i</p>
						<p>p</p>
						<p>x</p>
						<p>y</p>
					</div>

					{table.map((row, index) => {
						return (
							<div key={index} className="answer">
								<div className="answer-row">
									<p>{row.i}</p>
									<p>{row.p}</p>
									<p>{row.x}</p>
									<p>{row.y}</p>
								</div>
								<h4>points</h4>
								<div className="answer-points">
									{row.points.map((point) => {
										return <p>{point}, </p>;
									})}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default MidCircle;
