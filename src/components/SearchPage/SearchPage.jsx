/* eslint-disable no-console */
import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './styles.scss';

import { searchActions } from '../../actions';

class SearchPage extends React.Component {
	constructor(props) {
		super(props);
		this.onSearchClose = this.onSearchClose.bind(this);
	}

	onSearchClose(e) {
		e.preventDefault();
		const { dispatch } = this.props;
		dispatch(searchActions.searchClose());
	}

	render() {
		return (
			<div>
				<div className="search-page"> 
					<div className="container-fluid search-header">
						<div className="row">
							<div className="col col-md-1">
							</div>
							<div className="col col-md-10">
							</div>
							<div className="col col-md-1" onClick={this.onSearchClose}>
                                close
							</div>
						</div>
					</div>
					<div className="search-body">
					</div>
				</div>			
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { isSearchOpen } = state.search;
	return {
		isSearchOpen
	};
}

const connectedSearch = connect(mapStateToProps)(SearchPage);
export { connectedSearch as SearchPage };