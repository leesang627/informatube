import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import Player from '../components/Player';
import { pausePlayer, playPlayer, setPlayedSeconds } from '../reducers/player';

const Index = () => {
	const { playedSeconds } = useSelector(state => state.player);
	const dispatch = useDispatch();

	const handlePlayClick = (e) => {
		e.preventDefault();
		dispatch(playPlayer());
	};

	const handlePauseClick = (e) => {
		e.preventDefault();
		dispatch(pausePlayer());
	};

	const handleSeekTo = (e) => {
		e.preventDefault();
		dispatch(setPlayedSeconds(15));
	};

	return (
		<>
			<Player />
			<div>{playedSeconds}</div>
			<Button onClick={handlePlayClick}>play</Button>
			<Button onClick={handlePauseClick}>pause</Button>
			<Button onClick={handleSeekTo}>Seek To 15</Button>
		</>
	);
};

export default Index;