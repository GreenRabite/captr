import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, logout, signup } from './../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) =>({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch, {location}) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: (user) => dispatch(processForm(user)),
    formType
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SessionForm));
