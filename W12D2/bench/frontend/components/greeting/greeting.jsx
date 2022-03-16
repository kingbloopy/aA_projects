import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Greeting = ({ currentUser, logout }) => {
  const welcome = () => (
    <div>
      <h2>Welcome, {currentUser.username}!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );

  const links = () => (
    <div>
      <Link to="/signup">Sign Up</Link>
      <br/>
      <Link to="/login">Login</Link>
    </div>
  );

  return currentUser ? welcome() : links();
}

export default Greeting;