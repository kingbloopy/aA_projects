import React from "react";
import Tile from "./minesweeper";

export default class TileJSX extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(flagged) {
    console.log(flagged);
    const update = this.props.update;
    update(this.props.tile, flagged);
  }

  render() {
    if (this.props.tile.explored){
      if (this.props.tile.adjacentBombCount() > 1){
        return (
          <div className="tile explored">{this.props.tile.adjacentBombCount()}</div>
        );
      }
    } else if (this.props.tile.bombed){
      return (
        <div className="tile bombed">&#9762;</div>
      );
    } else if (this.props.tile.flagged) {
      return (
        <div className="tile flagged">&#9873;</div>
      );
    }

    return(
      <div className="tile" onClick={(e) => {
        if (e.altKey){
          this.handleClick(true);
        } else {
          this.handleClick(false);
        }
      }}></div>
    );
  }
}