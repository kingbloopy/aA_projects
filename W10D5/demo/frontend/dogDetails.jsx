import React from "react";

class DogDetail extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      votes: 0
    }
  }

  addBreedVote(){
    this.props.addBreedVote(); // passes in thru the props
    const total = this.state.votes + 1
    this.setState({votes: total});
  }

  render(){
    return(
      <div>
        {this.props.breed}: {this.state.votes}
      </div>
    )
  }
}

export default DogDetail;