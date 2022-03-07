import React from "react";
import ReactDOM from "react-dom";
import Game from "./game";
import TileJSX from "./tile";


document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");

  function Root(){
    return(
      <div>
        <Game/>
      </div>
    );
  }

  ReactDOM.render(<Root />, main);
});