import React from "react";

class Tabs extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     selectedIndex: 0
  //   }
  // }

  render(){
    const title = this.props.tabs.map(tab => {
      return(
        <h1>{tab.title}</h1>
      )
    });

    const content = this.props.tabs.map(tab => {
      return(
        <article>{tab.content}</article>
      )
    });

    return(
      <div>
        <h1>Tabs</h1>
        <ul>
          {title}
          {content}
        </ul>
      </div>
    )
  }
}

export default Tabs;