import { useState, useEffect } from 'react';
import {
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	Modal,
	Typography
} from '@mui/material';

const VillagerCard = props => {
	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4
	};

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const mon = props.data;

	const names = Object.entries(mon[1].name);

	const descStr = `${mon[1].personality} ${mon[1].species}`;

	return (
		<>
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
					<Button variant="contained" onClick={handleOpen} fullWidth>
						Details
					</Button>
				</CardContent>
			</Card>
			<Modal
				keepMounted
				open={open}
				onClose={handleClose}
				aria-labelledby="keep-mounted-modal-title"
				aria-describedby="keep-mounted-modal-description"
			>
				<Box sx={style}>
					<img src={mon[1].icon_uri} alt="" />
					<Typography id="keep-mounted-modal-title" variant="h4" component="h2">
						{names[0][1]}
					</Typography>
					<Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
						{mon[1].saying}
					</Typography>
				</Box>
			</Modal>
		</>
	);
};

export default VillagerCard;
