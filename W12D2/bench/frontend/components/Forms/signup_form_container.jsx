import { connect } from "react-redux";
import SessionForm from "./sessionform";
import { Link } from "react-router-dom";
import React from "react";
import { signup } from "../../actions/session_actions";

const mapStateToProps = ({ errors }, ownProps) => ({
  errors: errors.session,
  formType: 'Signup',
  // link: <Link to="/login">login instead</Link>
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);