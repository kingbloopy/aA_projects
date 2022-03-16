
import { connect } from "react-redux";
import Greeting from "./greeting";
import { logout } from "../../actions/session_actions";

// const mapStateToProps = (state) => ({
//   currentUser: state.entities.users[state.session.id]
// });

// const mapStateToProps = ({ session, entities: { users } }) => ({
//   currentUser: users[session.id]
// });

const mapStateToProps = ({ session, entities }) => ({
  currentUser: entities.users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);