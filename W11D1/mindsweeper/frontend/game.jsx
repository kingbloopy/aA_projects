
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

  updateGame(tile, flagged) {
    //call toggleFlag() or explore()
    if (flagged) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    //reset state using this.setState
    this.setState({ board: this.state.board });
  }

  render() {
    if (this.state.board.won()) {
      return(
        <div>
          <h1>You Won!!!</h1>
          <BoardJSX board={this.state.board} update={this.updateGame} />
        </div>
      );
    } else if (this.state.board.lost()) {
      return(
        <div>
          <h1>You Lost!!!</h1>
          <BoardJSX board={this.state.board} update={this.updateGame} />
        </div>
      );
    }

    return(
      <div>
        <BoardJSX board={this.state.board} update={this.updateGame} />
      </div>
    );
  }
}