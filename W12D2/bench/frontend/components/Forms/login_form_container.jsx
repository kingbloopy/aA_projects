import { connect } from "react-redux";
import SessionForm from "./sessionform";
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";
import React from "react";

const mapStateToProps = ({ errors }, ownProps) => ({
  errors: errors.session,
  formType: 'Login',
  link: <Link to="/signup">sign up instead</Link>
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);