import React from "react";
import Tile from "./minesweeper";

export default class TileJSX extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.tile);
    console.log(this.props.tile.explored);
  }

  render() {
    return (
      <div></div>
    )
  }
}