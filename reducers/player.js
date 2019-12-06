import produce from 'immer';

const initialState = {
	playedSeconds : 0,
	seekToSeconds : 0,
	isPlaying: false,
	isSeeking: false,
};

export const GET_PLAYED_SECONDS = 'GET_PLAYED_SECONDS';
export const SET_PLAYED_SECONDS = 'SET_PLAYED_SECONDS';
export const PLAY_PLAYER = 'PLAY_PLAYER';
export const PAUSE_PLAYER = 'PAUSE_PLAYER';

export const getPlayedSeconds = (playedSeconds) => ({
	type: GET_PLAYED_SECONDS,
	payload: playedSeconds,
});

export const setPlayedSeconds = (seekToSeconds) => ({
	type: SET_PLAYED_SECONDS,
	payload: seekToSeconds,
});

export const playPlayer = () => ({
	type: PLAY_PLAYER,
});

export const pausePlayer = () => ({
	type: PAUSE_PLAYER,
});

const player = produce((draft, action) => {
	switch(action.type) {
		case GET_PLAYED_SECONDS: {
			draft.playedSeconds = action.payload;
			draft.isSeeking = false;
			return;
		}
		case SET_PLAYED_SECONDS: {
			draft.seekToSeconds = action.payload;
			draft.isSeeking = true;
			return;
		}
		case PLAY_PLAYER: {
			draft.isPlaying = true;
			return;
		}
		case PAUSE_PLAYER: {
			draft.isPlaying = false;
			return;
		}
	}
}, initialState);

export default player;
