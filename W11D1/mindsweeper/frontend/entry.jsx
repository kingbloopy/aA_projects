import React from "react";
import ReactDOM from "react-dom";
import Game from "./game";


document.addEventListener("DOMContentLoaded", () => {

  function Root(){
    return(
      <div>
        <Game/>
      </div>
    );
  }

  const main = document.querySelector(".root");
  ReactDOM.render(Root, main);
});