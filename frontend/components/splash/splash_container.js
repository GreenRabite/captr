import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, logout, signup } from './../../actions/session_actions';
import SplashExperiments from './splash_experiments';

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user))
});

export default connect(null,mapDispatchToProps)(SplashExperiments);
