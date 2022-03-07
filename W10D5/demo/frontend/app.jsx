import React from "react";
import DogIndex from "./dogIndex";

const App = (props) => {
  return (
    <div>
      <h1>Hello {props.name} from App
      here are some nums: {props.nums}
      </h1>
      <DogIndex/>
    </div>
  )
}
// const App = () => {
//   return <h1>Hello world form App :D</h1>
// }

export default App;