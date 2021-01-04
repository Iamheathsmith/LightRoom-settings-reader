import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './landing_page';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import 'semantic-ui-css/semantic.min.css';

import './index.scss';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<LandingPage />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
