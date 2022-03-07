
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  // const hello = React.createElement('h1', null, ["Hello from React :)"]);
  // react syntax without using JSX syntax
  // ReactDOM.render(hello, root);
  // first arg is what, second is where
  
  const hello = <h1>Hello from React!!!</h1>;
  // ReactDOM.render(hello, root);
  // ReactDOM.render(<App/>, root);
  ReactDOM.render(<App name={"Mike"} nums={[1, 2, 3]}/>, root);
});