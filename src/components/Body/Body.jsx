/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../../helpers';
import { alertActions } from '../../actions';
import { PrivateRoute } from '../PrivateRoute';
import { HomePage } from '../../pages/Home';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import './bodyStyles.scss';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {TopicsPage} from '../TopicsPage';
import {FavouriteTopicsPage} from '../FavouriteTopics';
import Languages from '../../pages/Languages';

class Body extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			width:  800,
			height: 182
		};
		const { dispatch } = this.props;
		history.listen((location, action) => {
			// clear alert on location change
			dispatch(alertActions.clear());
		});

	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if(nextProps.alert.type == 'alert-success') {
			this.createNotification('alert-success', nextProps.alert.message);
		}
	}

	createNotification (type, message) {
		  switch (type) {
		case 'info':
			return NotificationManager.info('Info message');
		case 'alert-success':
			return NotificationManager.success(message, 'Title here');
		case 'warning':
			return NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
		case 'error':
			return NotificationManager.error('Error message', 'Click me!', 5000, () => {
				alert('callback');
			  });
		}
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
	    this.updateDimensions();
	    window.addEventListener('resize', this.updateDimensions.bind(this));
	  }

	  /**
	   * Remove event listener
	   */
	  componentWillUnmount() {
	    window.removeEventListener('resize', this.updateDimensions.bind(this));
	  }

	render() {
		const { alert } = this.props;
		return (
			<div>
				<NotificationContainer/>
				<header className="home_image" style={this.state} >
					<div className="container-fluid">
						<div className="col-sm-12">
							<Router history={history}>
								<div>
									<PrivateRoute exact path="/" component={TopicsPage} />
									<Route path="/login" component={LoginPage} />
									<Route path="/register" component={RegisterPage} />
									<Route path="/topics" component={TopicsPage}/>
									<Route path="/home" component={HomePage}/>
									<Route path="/favourite" component={FavouriteTopicsPage} />
									<Route path="/languages" component={Languages}/>
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
		alert,
	};
}

const connectedBody = connect(mapStateToProps)(Body);
export { connectedBody as Body };
