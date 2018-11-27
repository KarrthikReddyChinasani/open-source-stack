/* eslint-disable no-console */
import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './styles.scss';

import { searchActions } from '../../actions';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.props.dispatch(searchActions.searchClose());
		this.state = { isSearchOpen: this.props.isSearchOpen };
		this.searchClick = this.searchClick.bind(this);
	}

	searchClick(e) {
		e.preventDefault();
		this.setState( {
			isSearchOpen: !this.state.isSearchOpen
		});
		const { dispatch } = this.props;
		dispatch(searchActions.searchOpen());
	}

	render() {
		return (
			<div>
				<div className="container-fluid header">
					<div className="row">
						<div className="col col-md-2 project-name">
							<span className="title-1">Open Source</span>{' '}
							<span className="title-2">Stack</span>
						</div>
						<div className="col col-md-8 nav-wrapper">
							<ul className="nav">
								<li>
									<a className="icon-text-button" href="/">
										<svg
											tabIndex=""
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 23 24"
											role="img"
											aria-label="Binoculars"
										>
											<g>
												<path d="M16.5 9.07a.5.5 0 0 1-1 0c0-.59-1-1.23-2.5-1.43v8.93a5.5 5.5 0 1 0 9.95-3.22l-3-7a.51.51 0 0 0-.11-.16l-1.41-1.4L17 1a.53.53 0 0 0-.11-.18 2.76 2.76 0 0 0-3.71 0 .5.5 0 0 0-.15.35v5.5c2.05.24 3.5 1.21 3.5 2.44m2 12a4.5 4.5 0 1 1 4.5-4.5 4.51 4.51 0 0 1-4.5 4.5M0 16.57a5.5 5.5 0 0 0 11 0V7.64c-1.48.21-2.5.85-2.5 1.43a.5.5 0 1 1-1 0c0-1.23 1.45-2.2 3.5-2.44V1.07a.5.5 0 0 0-.15-.35 2.76 2.76 0 0 0-3.71 0A.49.49 0 0 0 7 .89l-1.43 3.9-1.42 1.42a.5.5 0 0 0-.15.16l-3 7a5.47 5.47 0 0 0-1 3.2m5.5 4.5a4.5 4.5 0 1 1 4.5-4.5 4.51 4.51 0 0 1-4.5 4.5" />
												<path d="M5.5 14.07a.5.5 0 0 0 0-1 3.5 3.5 0 0 0-3.5 3.5.5.5 0 0 0 1 0 2.5 2.5 0 0 1 2.5-2.5M18.5 14.07a.5.5 0 0 0 0-1 3.5 3.5 0 0 0-3.5 3.5.5.5 0 1 0 1 0 2.5 2.5 0 0 1 2.5-2.5" />
											</g>
										</svg>
												Browse
									</a>
								</li>
								<li>
									<a onClick={this.searchClick}>Search</a>
								</li>
								<li>
									<a href="/work/">Work</a>
								</li>
								<li>
									<a href="/clients/">Clients</a>
								</li>
								<li>
									<a href="/contact/">Contact</a>
								</li>
							</ul>
						</div>
						<div className="col col-md-2 sign-in-header">
							<a href="/register" className="register-button">
		Create Account
							</a>
							<a href="/login" className="icon-text-button">
								<svg
									tabIndex=""
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									role="img"
									aria-label="User"
								>
									<path d="M12 0C5.4 0 0 5.4 0 12c0 3.2 1.2 6.2 3.5 8.4C5.7 22.7 8.8 24 12 24s6.3-1.3 8.5-3.6S24 15.1 24 12c0-6.6-5.4-12-12-12zm8.1 19.4c-1.1-.6-2.6-1.2-4.3-1.8-.4-.2-.8-.3-1.3-.5v-1.8c.5-.3 1.4-1.1 1.5-2.9.4-.2.6-.7.6-1.4 0-.6-.2-1-.5-1.3.2-.8.7-2.1.4-3.3-.3-1.4-2.2-1.9-3.7-1.9-1.3 0-3 .4-3.6 1.5-.7 0-1.1.3-1.3.5-.6.8-.2 2.4 0 3.2-.3.2-.5.7-.5 1.3 0 .6.2 1.1.6 1.4.1 1.8 1 2.6 1.5 2.9v1.8c-.4.1-.8.3-1.2.4-1.6.6-3.3 1.2-4.4 1.9C2 17.4 1 14.8 1 12 1 5.9 5.9 1 12 1s11 4.9 11 11c0 2.8-1 5.4-2.9 7.4z" />
								</svg>
		Sign In
							</a>
						</div>
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

const connectedHeader = connect(mapStateToProps)(Header);
export { connectedHeader as Header };
