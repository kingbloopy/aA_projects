import React from "react";
import { Route, Switch } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";

const App = () => (
  <div>
    <header>
    <h1>Bench BnB</h1>
    <GreetingContainer/>
    </header>
    {/* <Switch> */}
    {/* <Route path="/signup" component={}/> */}
    {/* </Switch> */}
  </div>
);

export default App;