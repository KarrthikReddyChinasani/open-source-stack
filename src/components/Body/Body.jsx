import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../../helpers';
import { alertActions } from '../../actions';
import { PrivateRoute } from '../PrivateRoute';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import './bodyStyles.scss';

class Body extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
	       width:  800,
	       height: 182
	     }
		const { dispatch } = this.props;
		history.listen((location, action) => {
			// clear alert on location change
			dispatch(alertActions.clear());
		});
	}

	/**
	   * Calculate & Update state of new dimensions
	   */
	  updateDimensions() {
	      this.setState({ width: window.innerWidth, height: window.innerHeight});
	  }

	  /**
	   * Add event listener
	   */
	  componentDidMount() {
			console.log("coming here in body")
	    this.updateDimensions();
	    window.addEventListener("resize", this.updateDimensions.bind(this));
	  }

	  /**
	   * Remove event listener
	   */
	  componentWillUnmount() {
	    window.removeEventListener("resize", this.updateDimensions.bind(this));
	  }

	render() {
		const { alert } = this.props;
		return (
			<div>
			<header className="home_image" style={this.state} >
				<div className="container-fluid">
					<div className="col-sm-12">
						{alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
						}
						<Router history={history}>
							<div>
								<PrivateRoute exact path="/" component={HomePage} />
								<Route path="/login" component={LoginPage} />
								<Route path="/register" component={RegisterPage} />
							</div>
						</Router>
					</div>
				</div>
				</header>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { alert } = state;
	return {
		alert
	};
}

const connectedBody = connect(mapStateToProps)(Body);
export { connectedBody as Body };
