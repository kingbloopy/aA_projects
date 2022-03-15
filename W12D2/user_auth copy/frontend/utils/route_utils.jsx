import React from 'react';
import { connect } from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom'

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser) // value will be boolean if there is a current user
});

// <AuthRoute path="" component={}/>
// taking in loggedIn key from mapstatetoprops
const Auth = ({loggedIn, path, component: Component}) => (
  <Route
    path={path}
    render={props => (
      loggedIn ? <Redirect to="/" /> : <Component {...props} /> // if user if logged in, they cannot see component, if they are logged out, they can
    )}
  />
);

const Protected = ({loggedIn, path, component: Component}) => (
  <Route
    path={path}
    render={props => (
      loggedIn ? <Component {...props}/> : <Redirect to="/signup"/>
    )}
  />
)

// const Bool = 

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));