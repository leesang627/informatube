import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import ReactPlayer from 'react-player';

const Player = ({ url, onChangeTime }) => {
	const playerRef = useRef(null);
	const [time, setTime] =  useState(0);
	const [playedSeconds, setPlayedSeconds] = useState(0);

	return (
		<ReactPlayer
			ref={playerRef}
			url={url}
			controls={true}
		/>
	);
};

export default forwardRef(Player);