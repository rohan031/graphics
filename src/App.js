import { useState } from "react";
import AlgoList from "./components/AlgorithmList";
import BLine from "./components/BLine";
import DDALine from "./components/DDALine";
import MidCircle from "./components/MidCircle";

function App() {
	const [algo, setAlgo] = useState(0);

	return (
		<>
			{(() => {
				switch (algo) {
					case 0:
						return <AlgoList setAlgo={setAlgo} />;
					case 1:
						return <DDALine />;
					case 2:
						return <BLine />;
					case 3:
						return <MidCircle />;
					default:
						return <p>No idea what should be here!</p>;
				}
			})()}
		</>
	);
}

export default App;
