function AlgoList({ setAlgo }) {
	const handleClick = (value) => {
		setAlgo(value);
	};

	return (
		<div className="algorithms-list">
			<h1 onClick={() => handleClick(1)} className="algorithms-list__item">
				DDA line alorithm
			</h1>
			<h1 onClick={() => handleClick(2)} className="algorithms-list__item">
				Bresenham's line algorithm
			</h1>
			<h1 onClick={() => handleClick(3)} className="algorithms-list__item">
				Mid point circle algorithm
			</h1>
		</div>
	);
}

export default AlgoList;
