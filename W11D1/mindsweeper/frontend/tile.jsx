import React from "react";
import Tile from "./minesweeper";

export default class TileJSX extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(flagged) {
    //all tiles default class unexplored
    //when clicked on the class changes to appropriate title
    const update = this.props.update;
    update(this.props.tile, flagged);
  }

  render() {
    // change innertext and change class
    if (this.props.tile.explored){
      if (this.props.tile.bombed) {
        return (
          <div className="tile bombed">&#9762;</div>
        );
      } else {
        return (
          <div className="tile explored">{this.props.tile.adjacentBombCount()}</div>
        );
      }
    // } else if (this.props.tile.bombed){
    //   return (
    //     <div className="tile bombed" onClick={(e) => e.target.innerHTML = '&#9762;'}></div>
    //   );
    } else if (this.props.tile.flagged) {
      return (
        <div className="tile flagged" onClick={(e) => {
          if (e.altKey) {
            e.target.innerHTML = "";
            this.props.tile.flagged = false;
            e.target.className = "tile unexplored";
            this.handleClick(false);
          }
        }}>&#9873;</div>
        );
      }

      //div variable 
      //change content 
      
      return(
      <div className="tile unexplored" onClick={(e) => {
        console.log(e);
        if (e.altKey){
          this.handleClick(true);
        } else {
          this.handleClick(false);
        }
      }}></div>
    );
  }
}