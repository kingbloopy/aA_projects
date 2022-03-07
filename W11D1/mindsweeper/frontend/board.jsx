import React from "react";
import TileJSX from './tile';
import { Board } from "./minesweeper";

export default class BoardJSX extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const board = this.props.board.grid;

    let rows = board.map((row, i) => {
      let newRow = row.map((tile, j) => {
        return (
          <TileJSX tile={tile} update={this.props.update} key={j} />
        );
      });
      return(
        <div className="row" key={i}>
          {newRow} 
        </div>
      );
    });

    return (
      <div className="row-container">
        {rows}
      </div>
    );
  };
} 