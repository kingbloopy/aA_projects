import React from "react";
import ReactDom from "react-dom";
import Root from "./frontend/Root";
import Clock from "./frontend/Clock"
import Tabs from "./frontend/tabs";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDom.render(<Clock />, root);
});