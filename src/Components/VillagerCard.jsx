import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Typography
} from '@mui/material';

const VillagerCard = props => {
	const mon = props.data;

	const names = Object.entries(mon[1].name);

	const descStr = `${mon[1].personality} ${mon[1].species}`;

	return (
		<Card>
			<CardMedia
				component="img"
				height="250"
				image={mon[1].image_uri}
				alt={names[0][1]}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{names[0][1]}
				</Typography>
				<Typography gutterBottom variant="h6" component="div">
					{descStr}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default VillagerCard;
