import React from "react";

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = { time: new Date() }
    this.tick = this.tick.bind(this);
  } 

  tick(){
    const time = new Date();
    this.setState({time})
  }

  componentDidMount(){
    this.timeInterval = setInterval(this.tick,1000)
  }

  render(){
    const {time}  = this.state;
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const date = time.toDateString();

    return (
      <div>
        <h1 className="title">Clock</h1>
        <h2 className="time">Time: { hours }:{ minutes }:{ seconds } PDT</h2>
        <h2 className="date">Date: { date }</h2>
      </div>
        //TODO add date later
    );
  }
}

export default Clock;
