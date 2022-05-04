import { useState, useEffect } from 'react';

import VillagerCard from './Components/VillagerCard';

import { Box, Container, Grid, Typography } from '@mui/material';

const App = () => {
	const [pokes, setPokes] = useState([]);

	const getPokes = async () => {
		const response = await fetch('http://acnhapi.com/v1/villagers/').then(
			response => response.json()
		);

		const rspArr = Object.entries(response);

		setPokes(rspArr);
	};

	useEffect(() => {
		getPokes();
	}, []);

	return (
		<Container maxWidth="lg">
			<Typography gutterBottom variant="h3" component="h1">
				Animal Crossing Villagers
			</Typography>

			<Box>
				<Grid container spacing={2}>
					{pokes.map(data => (
						<Grid item xs={6} s={4} md={3} key={data[0]}>
							<VillagerCard data={data} bordered />
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	);
};

export default App;
