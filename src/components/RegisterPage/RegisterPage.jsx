import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../actions';
import './registerStyles.scss';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                userName: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
      console.log("event", event)

        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if(!this.validateForm(user)){
          return;
        }
        if (user.firstName && user.lastName && user.userName && user.password && user.email && user.confirmPassword) {
            dispatch(userActions.register(user));
        }
    }

    validateForm(user){
        let isFormValid = true;
        let errors = {};
        if (typeof user.email !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(user.email)) {
            isFormValid = false;
            errors["email"] = "Please enter valid email-ID.";
          }
        }
        console.log(isFormValid,'isFormValid');
        this.setState({
          errors: errors
        });
        return isFormValid;
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
          <div className="col-md-4 col-md-offset-8 login-page">
            <div className="box-wrapper">
              <h2>Register</h2>
              <form name="form" onSubmit={this.handleSubmit}>
                  <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                      <label htmlFor="firstName">First Name</label>
                      <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
                      {submitted && !user.firstName &&
                          <div className="help-block">First Name is required</div>
                      }
                  </div>
                  <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                      <label htmlFor="lastName">Last Name</label>
                      <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} />
                      {submitted && !user.lastName &&
                          <div className="help-block">Last Name is required</div>
                      }
                  </div>
                  <div className={'form-group' + (submitted && !user.userName ? ' has-error' : '')}>
                      <label htmlFor="userName">Username</label>
                      <input type="text" className="form-control" name="userName" value={user.userName} onChange={this.handleChange} />
                      {submitted && !user.userName &&
                          <div className="help-block">Username is required</div>
                      }
                  </div>
                  <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                      <label htmlFor="username">Email</label>
                      <input type="text" className="form-control" name="email" value={user.email} onChange={this.handleChange} />
                      {submitted && !user.email &&
                          <div className="help-block">EMail is required</div>
                      }
                  </div>
                  <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                      <label htmlFor="password">Password</label>
                      <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                      {submitted && !user.password &&
                          <div className="help-block">Password is required</div>
                      }
                  </div>
                  <div className={'form-group' + (submitted && !user.confirmPassword ? ' has-error' : '')}>
                      <label htmlFor="password">Confirm Password</label>
                      <input type="password" className="form-control" name="confirmPassword" value={user.confirmPassword} onChange={this.handleChange} />
                      {submitted && !user.confirmPassword &&
                          <div className="help-block">Confirm Password is required</div>
                      }
                  </div>
                  <div className="form-group">
                      <div className="register-btn-sec">
                        <button className="btn register-btn">Register</button>
                        {registering &&
                              <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                         }
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                      </div>
                    </div>
              </form>
            </div>
          </div>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
