import { connect } from "react-redux";
import SessionForm from "./sessionform";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  formType: 'login'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: () => dispatch(loginUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);