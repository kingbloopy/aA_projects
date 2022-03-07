import React from "react";
import DogDetail from "./dogDetail"

class DogIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalVotes: 0
    };

    this.addVote = this.addVote.bind(this);
    // will call bound version everytime function is called
  }

  componentDidMount

  addVote(){
    this.setState({totalVotes: this.state.totalVotes + 1});
  }

  render(){
    const breeds = [
      "hot-dog",
      "Corgi",
      "Maltesepoo",
      "Pug",
      "GoldenDoodle",
      "German Shepard",
      "Shiba",
      "Wolf",
      "Snoop",
      "AlligatorDoodle"
    ];
    return(
      <>
      <h1>Total Dog votes: {this.state.totalVotes}</h1>
      <ul>
        {breeds.map(breed => {
          return(
            <li key={breed} onClick={() => this.addVote()}>{breed}</li>
          )
        })}
      </ul>
      </>
      // <DogDetail key={breed} breed={breed} addVote={this.addVote}/>
    )
  }
}

export default DogIndex;