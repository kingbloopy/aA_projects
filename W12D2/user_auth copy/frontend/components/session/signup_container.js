import {connect} from 'react-redux';
import {createNewUser} from '../../actions/session';
import SignUp from './signup';

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     createNewUser: formUser => dispatch(createNewUser(formUser))
//   }
// }

// do not need to pass in any props 
export default connect(null, mapDispatchToProps)(SignUp);