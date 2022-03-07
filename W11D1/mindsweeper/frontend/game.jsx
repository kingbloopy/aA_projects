
import React from "react";
import BoardJSX from "./board";
import TileJSX from "./tile";
import {Board} from "./minesweeper";
import Tile from "./minesweeper";

export default class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      board: new Board(9, 10)
    }
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame() {

  }

  render() {
    return(
      <BoardJSX board={this.state.board} update={this.updateGame} />
    );
  }
}