import React from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import { githubActions } from '../../actions';

class ProfilePage extends React.Component {
	constructor(props) {
		super(props);
		this.connectToGitHub = this.connectToGitHub.bind(this);
	}

	connectToGitHub() {
		const { dispatch } = this.props;
		dispatch(githubActions.githubConnect());
	}

	static getDerivedStateFromProps(props, state) {
		console.log('props', props);
		console.log('state', state);
		return null;
	}

	render() {
		return (
			<div>
				<a >
					<span onClick={() => this.connectToGitHub()}>Git hub connect</span>
				</a>
			</div>
		);
	}
}

function mapStateToProps(state) {
	// const { topics } = state;
	// return {
	// 	topics
	// };
}

const connectedProfilePage = connect(mapStateToProps)(ProfilePage);
export { connectedProfilePage as ProfilePage };
