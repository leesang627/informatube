import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { getPlayedSeconds, pausePlayer, playPlayer } from '../reducers/player';
import { useDispatch, useSelector } from 'react-redux';

const Player = () => {
	const playerRef = useRef(null);
	const { isPlaying, isSeeking, seekToSeconds } = useSelector(state => state.player);
	const dispatch = useDispatch();

	useEffect(() => {
		if(isSeeking) playerRef.current.seekTo(seekToSeconds);
	}, [isSeeking]);

	const handleProgress = (state) => {
		dispatch(getPlayedSeconds(parseInt(state.playedSeconds)));
	};

	const handlePlay = () => {
		dispatch(playPlayer());
	};

	const handlePause = () => {
		dispatch(pausePlayer());
	};

	return (
		<ReactPlayer
			ref={playerRef}
			url="https://www.youtube.com/watch?v=evIssbG16xg"
			controls={true}
			playing={isPlaying}
			onPlay={handlePlay}
			onPause={handlePause}
			onProgress={handleProgress}
		/>
	);
};

export default Player;