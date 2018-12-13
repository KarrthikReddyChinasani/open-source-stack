import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app.jsx';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import WebFont from 'webfontloader';
import { store } from './helpers';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('app')
);
WebFont.load({
	google: {
		families: ['Titillium Web:300,400,700', 'Roboto:300,400,700,900', 'Montserrat:300,400,500,700,900', 'sans-serif']
	}
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
