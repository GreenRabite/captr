import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      fname: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
    if (this.props.errors && this.props.errors.length) {
      this.props.clearErrors();
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <div>Need to create an account?<Link to="/signup"> Sign up.</Link></div>;
    } else {
      return <div>Already a member? <Link to="/login"> Log in.</Link></div>;
    }
  }

  renderErrors() {
    if (this.props.errors) {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`} className="errors">
              {error}
            </li>
          ))}
        </ul>
      );
    }else {
      return ;
    }
  }

  render() {

    let signUpInfo;
      if (this.props.formType === "signup") {
        signUpInfo = (
          <div className="login-form-container">
            <label>
              <input type="text"
                placeholder="First Name"
                value={this.state.fname}
                onChange={this.update('fname')}
                className="login-input form-style-6"
                />
            </label>
            <br/>
            <label>
              <input type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input form-style-6"
                />
            </label>
          </div>
        );
      }

    return (
      <div className="login-form-container login animated fadeIn">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-top-info">
            <b>Please {this.props.formType} below:</b>
          </div>
          <div className="login-form">
            <br/>
            <label>
              <input type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input form-style-6"
              />
            </label>
            <br/>
            { signUpInfo }
            <label>
              <input type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input form-style-6"
              />
            </label>
            <br/>
            <br/>
            <ul>
              {this.renderErrors()}
            </ul>
            <div className="form-submit">
              <input className="main-bttn" type="submit" value={this.props.formType === 'login' ? 'Login' : 'Sign Up'} />
            </div>
            <div className="session_form_ending_tag">{this.navLink()}</div>
            <br/>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
