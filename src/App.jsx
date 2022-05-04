import './App.css';

import { useState, useEffect } from 'react';

const App = () => {
	const [pokes, setPokes] = useState([]);

	const getPokes = async () => {
		const response = await fetch('https://pokeapi.co/api/v2/pokemon/').then(
			response => response.json()
		);

		setPokes(response.results);
	};

	useEffect(() => {
		getPokes();
	}, []);

	return (
		<div className="App">
			<h1>Pokédex</h1>
			{pokes.map(data => (
				<p key={Math.random()}>{data.name}</p>
			))}
		</div>
	);
};

export default App;
