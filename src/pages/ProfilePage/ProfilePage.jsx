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
		if(props.githubConnect.github!= null) {
			var wnd = window.open('about:blank', '', '_blank');
			wnd.document.write(props.githubConnect.github.res);
		}
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
	return state;
}

const connectedProfilePage = connect(mapStateToProps)(ProfilePage);
export { connectedProfilePage as ProfilePage };
