import React from 'react';

import { Header } from './components/Header';
import { SearchPage } from './components/SearchPage';
import { Body } from './components/Body';
import { connect } from 'react-redux';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return !this.props.isSearchOpen ? (
			<div>
				<Header />
				<Body />
			</div>
		) : (
			<SearchPage />
		);
	}
}

function mapStateToProps(state) {
	const { isSearchOpen } = state.search;
	return {
		isSearchOpen
	};
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
