import { connect } from "react-redux";
import SessionForm from "./sessionform";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  formType: 'signup'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: () => dispatch(signupUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);