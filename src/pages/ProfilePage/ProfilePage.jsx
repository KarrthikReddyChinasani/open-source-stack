import React from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import { githubActions } from '../../actions';
import GitHubLogin from 'react-github-login';
import { githubService } from '../../services';

class ProfilePage extends React.Component {
	constructor(props) {
		super(props);
		this.connectToGitHub = this.connectToGitHub.bind(this);
	}

	connectToGitHub() {
		const { dispatch } = this.props;
		dispatch(githubActions.githubConnect());
	}

	onSuccess(response){
		console.log(response);
		githubService.githubToken(response.code);
	}
	onFailure(response){
		console.error(response);
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
				<div>
					<a >
						<span onClick={() => this.connectToGitHub()}>Git hub connect</span>
					</a>
				</div>
				<GitHubLogin clientId="18affc69905f556579bf"
					redirectUri='https://localhost:8080/profile'
					onSuccess={this.onSuccess}
					onFailure={this.onFailure}/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

const connectedProfilePage = connect(mapStateToProps)(ProfilePage);
export { connectedProfilePage as ProfilePage };
