import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../../actions";
import "./registerStyles.scss";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
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
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    const { dispatch } = this.props;
    if (!this.validateForm(user)) {
      return;
    }
    if (
      user.firstName &&
      user.lastName &&
      user.userName &&
      user.password &&
      user.email &&
      user.confirmPassword
    ) {
      dispatch(userActions.register(user, this.notificationDOMRef));
    }
  }

  validateForm(user){
    let isFormValid = true;
    let errors = {};
    if (typeof user.email !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(user.email)) {
        isFormValid = false;
        errors["email"] = "Please enter valid email-ID.";
      }
    }
    this.setState({
      errors: errors
    });
    return isFormValid;
  }

  render() {
    const { registering  } = this.props;
    const { user, submitted } = this.state;
    return (
        <div className="col-md-4 col-md-offset-4 register-page">
          <div className="main">
            <p className="sign" align="center">
              Sign in
            </p>
            <form className="form1">
              <div className="container-fluid p-m-0">
                <div className="row p-m-0">
                  <div className="col col-md-6 col-sm-6 col-6 p-m-0">
                    <input
                      className="name"
                      type="text"
                      align="center"
                      name="firstName"
                      placeholder="First Name"
                      value={user.firstName}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col col-md-6 col-sm-6 col-6 p-m-0">
                    <input
                      className="name last-name"
                      type="text"
                      align="center"
                      name="lastName"
                      placeholder="Last Name"
                      value={user.lastName}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
              <input
                className="un"
                type="text"
                align="center"
                name="userName"
                placeholder="User Name"
                value={user.userName}
                onChange={this.handleChange}
              />

              <input
                className="un"
                type="email"
                align="center"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={this.handleChange}
              />

              <input
                className="un"
                type="password"
                align="center"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={this.handleChange}
              />

              <input
                className="pass"
                type="password"
                align="center"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={user.confirmPassword}
                onChange={this.handleChange}
              />
              <button
                className="submit"
                align="center"
                onClick={this.handleSubmit}
              >
                Sign in
              </button>
              {registering && (
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
              )}
              <p className="forgot" align="center">
                <Link to="/login" href="#">
                  Login
                </Link>
              </p>
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
