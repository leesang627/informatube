import React from 'react';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const Informatube = ({Component, store}) => {
	return(
		<Provider store={store}>
			<Head>
				<title>Informatube</title>
			</Head>
			<Component />
		</Provider>
	);
};

const configureStore = (initialState, options) => {
	const middlewares = [];
	const enhancer = process.env.NODE_ENV === 'production'
		? compose(applyMiddleware(...middlewares))
		: compose(
			applyMiddleware(...middlewares),
			!options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
		);
	const store = createStore(reducer, initialState, enhancer);
	return store;
};

export default withRedux(configureStore)(Informatube);

