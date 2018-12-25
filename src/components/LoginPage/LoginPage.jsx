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
			userName: '',
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
		const { userName, password } = this.state;
		const { dispatch } = this.props;
		if (userName && password) {
			dispatch(userActions.login(userName, password));
		}
	}

	render() {
		const { loggingIn } = this.props;
		const { userName, password /*, submitted*/ } = this.state;
		return (
			<div className="col-md-4 col-md-offset-4 login-page">
				<div className="main">
					<p className="sign" align="center">
            Sign in
					</p>
					<form className="form1">
						<input
							className="un"
							type="text"
							align="center"
							name="userName"
							placeholder="Username"
							value={userName}
							onChange={this.handleChange}
						/>
						<input
							className="pass"
							type="password"
							align="center"
							name="password"
							placeholder="Password"
							value={password}
							onChange={this.handleChange}
						/>
						<button className="submit" align="center" onClick={this.handleSubmit}>
              Sign in
						</button>
						{loggingIn && (
							<img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
						)}
						<p className="forgot" align="center">
							<Link to="/register" href="#">
                Forgot Password?
							</Link>
						</p>
						<p className="register" align="center">
							<Link to="/register" href="#">
                Register
							</Link>
						</p>
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
