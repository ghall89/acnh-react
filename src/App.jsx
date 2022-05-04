import { useState, useEffect } from 'react';

import VillagerCard from './Components/VillagerCard';

import { Box, Container, Grid, Typography } from '@mui/material';
import LazyLoad from 'react-lazyload';

const App = () => {
	const [villagers, setVillagers] = useState([]);

	const getVillagers = async () => {
		const response = await fetch('http://acnhapi.com/v1/villagers/').then(
			response => response.json()
		);

		const rspArr = Object.entries(response);

		setVillagers(rspArr);
	};

	useEffect(() => {
		getVillagers();
	}, []);

	return (
		<Container maxWidth="lg">
			<Typography gutterBottom variant="h3" component="h1">
				Animal Crossing Villagers
			</Typography>

			<Box>
				<Grid container spacing={2}>
					{villagers.map(data => (
						<Grid item xs={6} s={4} md={3} key={data[0]}>
							<LazyLoad height={200} once>
								<VillagerCard data={data} bordered />
							</LazyLoad>
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	);
};

export default App;
