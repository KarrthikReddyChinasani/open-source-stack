import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../actions';
import './loginStyles.scss';

class LoginPage extends React.Component {
	constructor(props) {
		super(props);

		// reset login status
		this.props.dispatch(userActions.logout());

		this.state = {
			username: '',
			password: '',
			submitted: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleSubmit(e) {
		e.preventDefault();

		this.setState({ submitted: true });
		const { username, password } = this.state;
		const { dispatch } = this.props;
		if (username && password) {
			dispatch(userActions.login(username, password));
		}
	}

	render() {
		const { loggingIn } = this.props;
		const { username, password, submitted } = this.state;
		return (
			<div className="col-md-4 col-md-offset-7 login-page">
				<div className="box-wrapper">
					<h2>Login</h2>
					<form name="form" onSubmit={this.handleSubmit}>
						<div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
							<label htmlFor="username">Email/UserName</label>
							<input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
							{submitted && !username &&
	                            <div className="help-block">Username is required</div>
							}
						</div>
						<div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
							<label htmlFor="password">Password</label>
							<input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
							{submitted && !password &&
	                            <div className="help-block">Password is required</div>
							}
						</div>
						<div className="forgot-pwd">
							<Link to="/register" className="btn btn-link">Register</Link>
							<Link to="/register" className="btn btn-link">Forgot Password</Link>
						</div>
						<div className="form-group">
							<div className="login-btn">
								<button className="btn">Submit</button>
								{loggingIn &&
		                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
								}
							</div>
						</div>
						<div className="login-links">
							<Link to="/register" className="btn btn-link">Login with github</Link>
							<Link to="/register" className="btn btn-link">Login with **</Link>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { loggingIn } = state.authentication;
	return {
		loggingIn
	};
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };
