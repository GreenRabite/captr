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
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    console.log({user});
    this.props.processForm(user);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Sign Up Instead</Link>;
    } else {
      return <Link to="/login">Log In Instead</Link>;
    }
  }

  renderErrors() {
    if (this.props.errors) {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
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
          <div>
            <label>
              <input type="text"
                placeholder="First Name"
                value={this.state.fname}
                onChange={this.update('fname')}
                className="login-input"
                />
            </label>
            <br/>
            <label>
              <input type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                />
            </label>
          </div>
        );
      }

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to captr!
          <br/>
          Please {this.props.formType} or {this.navLink()}
            {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>
              <input type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            { signUpInfo }
            <label>
              <input type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
