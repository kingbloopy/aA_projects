import React from "react";
import { Route, Switch } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./Forms/login_form_container";
import SignupFormContainer from "./Forms/signup_form_container";

const App = () => (
  <div>
    <header>
    <h1>Bench BnB</h1>
    <GreetingContainer/>
    </header>
    <Route path="/signup" component={SignupFormContainer}/>
    <Route path="/login" component={LoginFormContainer}/>
  </div>
);

export default App;